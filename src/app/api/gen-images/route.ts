// src/app/api/generate-image/route.ts

import { NextResponse } from "next/server";
import { GoogleGenAI, Modality } from "@google/genai";
import { db } from "~/server/db/index";
// Assuming a detailed schema to store all form data, as previously discussed.
// If your schema is still named 'generatedImages', you may need to adjust.
import { generatedImages } from "~/server/db/schemas/gen-ai-schema";

// Define a type for your form data for better type safety
interface StoryData {
  title: string;
  description: string;
  genre: string;
  style: string;
  mood: string;
  setting: string;
  characters: string;
  tags: string;
}

export async function POST(req: Request) {
  try {
    // Check for API Key first
    // const apiKey = process.env.GEMINI_API_KEY;
    // if (!apiKey) {
    //   console.error("GEMINI_API_KEY is not set in environment variables.");
    //   return NextResponse.json(
    //     { message: "Server is not configured correctly." },
    //     { status: 500 },
    //   );
    // }

    // 1. Get the structured formData from the request body
    const formData: StoryData = await req.json();

    // 2. Construct a detailed prompt from the form data
    const promptParts = [];
    if (formData.style) promptParts.push(`${formData.style} style`);
    if (formData.genre) promptParts.push(`${formData.genre} scene`);
    // The main description is the most important part
    if (formData.description) promptParts.push(formData.description);
    if (formData.characters)
      promptParts.push(`featuring ${formData.characters}`);
    if (formData.setting) promptParts.push(`set in ${formData.setting}`);
    if (formData.mood) promptParts.push(`with a ${formData.mood} mood`);
    if (formData.tags) promptParts.push(`keywords: ${formData.tags}`);

    const finalPrompt = promptParts.join(", ");

    if (!finalPrompt) {
      return NextResponse.json(
        { message: "Prompt cannot be empty. Please provide a description." },
        { status: 400 },
      );
    }

    // 3. Call the Gemini API for multimodal generation
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEN_AI_API });
    const modelResponse = await ai.models.generateContent({
      model: "gemini-2.0-flash-image-generation",
      contents: finalPrompt,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    // 4. CORRECTLY process the multimodal response
    const imageParts = modelResponse?.candidates?.[0]?.content?.parts;
    if (!imageParts) {
      return NextResponse.json(
        { message: "Invalid response from AI service." },
        { status: 500 },
      );
    }

    let imageUrl = "";
    for (const part of imageParts) {
      if (part.inlineData?.data) {
        // Construct the base64 data URL from the image part
        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        break; // Stop after finding the first image
      }
    }

    if (!imageUrl) {
      return NextResponse.json(
        { message: "The model did not generate an image for this prompt." },
        { status: 500 },
      );
    }

    // 5. Save the detailed story and image URL to the database
    // This preserves all the user's structured input for future use.
    // await db.insert(generatedImages).values({
    //   prompt: finalPrompt,

    //   imageUrl: imageUrl,
    // });

    // 6. Return a successful response to the frontend
    return NextResponse.json({ success: true, imageUrl: imageUrl });
  } catch (error) {
    console.error("An error occurred in the generate-image endpoint:", error);
    return NextResponse.json(
      { message: "An internal server error occurred" },
      { status: 500 },
    );
  }
}
