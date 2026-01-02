
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI SDK with the secure environment key
export const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Standardized configuration for executive-grade reasoning
export const GENERATION_CONFIG = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
};
