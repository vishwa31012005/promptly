import { GoogleGenAI, Type } from "@google/genai";

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

export const generatePromptFromImage = async (imageFile: File | null, additionalDescription: string): Promise<{ analysis: string; finalPrompt: string; }> => {
  try {
    const systemPrompt = `You are an expert AI prompt engineer specializing in image analysis and modification prompts for tools like Gemini. Your task is to analyze a user's uploaded photo and instructions, then create a detailed analysis and a final, actionable prompt.

**Your Workflow:**

1.  **Step 1: Automatic Image Analysis**
    *   Analyze the user's uploaded photo in detail. Create a structured description covering these aspects:
        *   **Subject:** Who or what is the main focus? Describe their appearance, expression, and posture.
        *   **Clothing:** What is the subject wearing? Describe the style, color, and fabric.
        *   **Emotion:** What is the overall mood or emotion conveyed?
        *   **Background/Scene:** What is behind the subject? Describe the environment.
        *   **Lighting:** Describe the lighting conditions (e.g., soft daylight, harsh shadow, studio lighting).
        *   **Color Palette:** What are the dominant colors?
        *   **Composition:** How is the shot framed (e.g., close-up, portrait, landscape)?
        *   **Style:** Is it a realistic photograph, a painting, etc.?
    *   This analysis will be shown to the user.

2.  **Step 2: Synthesize and Generate the Final Prompt**
    *   Combine your detailed analysis from Step 1 with the user's "Additional Description" text. The user's text provides the core modification request.
    *   The final prompt must explicitly instruct the image generation AI to use the uploaded image as the starting point.
    *   **Crucial Rule:** The prompt must begin with a phrase like "Using the provided photo as a base," or "Modify the uploaded image to..." to ensure the original context is used. The requested modifications should blend realistically and consistently with the original photo's lighting, style, and composition unless the user specifically asks to change them. The output must be a direct command, not a description of a new image.

**Output Format:**

Your final output MUST be a single, valid JSON object with the following structure:
{
  "analysis": "A string containing your detailed, structured analysis from Step 1.",
  "finalPrompt": "A string containing the final, copy-paste-ready prompt generated in Step 2."
}`;

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
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: {
              type: Type.STRING,
              description: "A detailed, structured analysis of the uploaded image, covering subject, background, colors, style, etc."
            },
            finalPrompt: {
              type: Type.STRING,
              description: "The final, optimized, copy-paste-ready prompt for an image generation AI, combining the analysis and user's instructions."
            }
          },
          required: ["analysis", "finalPrompt"]
        },
      },
    });

    const jsonText = response.text;
    const responseObject = JSON.parse(jsonText);
    
    return {
        analysis: responseObject.analysis || 'Analysis could not be generated.',
        finalPrompt: responseObject.finalPrompt || 'Prompt could not be generated.'
    };
    
  } catch (error) {
    console.error("Error generating prompt from Gemini:", error);
    if (error instanceof SyntaxError) {
        throw new Error("Failed to generate prompt. The AI returned an invalid format. Please try again.");
    }
    throw new Error("Failed to generate prompt. Please check your API key and try again.");
  }
};
