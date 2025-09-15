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

export const generatePromptFromImage = async (imageFile: File, additionalDescription: string): Promise<string> => {
  try {
    const imagePart = await fileToGenerativePart(imageFile);
    
    const systemPrompt = `You are an expert in creating detailed and effective prompts for AI image generation models. 
Based on the uploaded image (which could be a screenshot, wireframe, or UI design) and any additional text, generate a frontend layout suggestion or a descriptive prompt.
The output should be a clear, concise, and descriptive text prompt that an AI could use to generate a similar or improved version of the UI.
Focus on structure, color palette, typography, and key UI components shown in the image. Be specific.`;

    const userPrompt = `
Here is a UI design I'm working on. 
${additionalDescription ? `Additional context: ${additionalDescription}`: 'Please analyze the image and suggest a descriptive prompt.'}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { 
        parts: [
          { text: userPrompt },
          imagePart
        ]
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
