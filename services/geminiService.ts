import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const fileToGenerativePart = (file: File): Promise<{ inlineData: { data: string; mimeType: string; } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // result is a data URL like "data:image/jpeg;base64,...."
      // We need to extract just the base64 part.
      const base64Data = (reader.result as string).split(',')[1];
      if (!base64Data) {
        reject(new Error("Failed to read file as base64."));
        return;
      }
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = (error) => reject(error);
  });
};

export const generatePromptFromImage = async (imageFile: File | null, additionalDescription: string): Promise<string> => {
  try {
    const systemPrompt = `You are a world-class prompt engineer with 30+ years of expertise in multimodal AI (text + image).

Your Task:

Analyze the user’s input text from the Additional Description box.

If an image is uploaded:

Extract and describe the image in detail.

Combine the auto-generated image description with the user’s text.

Create the best possible final prompt, fully optimized for image generation tools (Gemini, GPT, DALL-E, Stable Diffusion).

If no image is uploaded:

Use only the user’s input text.

Transform it into a high-quality final prompt, which could be:

an image generation prompt,

a text generation scenario,

or an instruction prompt — whichever is most suitable for the content.

Prompt Engineering Framework:

Use Role + Task + Context + Constraints + Output Style for maximum clarity.

Add missing context if needed (creativity, realism, lighting, tone, style).

Ensure the final result is clear, actionable, structured, and immediately usable in Gemini, GPT, Claude, or DeepSeek.

Output should be clean, copy-paste ready, and designed to maximize AI performance.`;

    const parts: any[] = [{ text: additionalDescription || 'No additional instructions provided.' }];

    if (imageFile) {
      const imagePart = await fileToGenerativePart(imageFile);
      parts.push(imagePart);
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { 
        parts: parts
      },
      config: {
        systemInstruction: systemPrompt,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating prompt from Gemini:", error);
    throw new Error("Failed to generate prompt. Please check your API key and try again.");
  }
};
