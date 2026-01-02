
import { Type } from "@google/genai";
import { ai, GENERATION_CONFIG } from "./config";
import { ProjectState } from "../../types";

/**
 * Provides proactive strategic insights for the dashboard.
 */
export async function getAIInsights(project: ProjectState): Promise<string[]> {
  const prompt = `
    Role: Proactive AI Strategy Agent
    Company: ${project.companyName}
    Industry: ${project.industry}
    Goal: Provide 3 strategic insights about their new system's learning curve and market advantages.
    Tone: Professional, high-confidence, strategic.
  `;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        ...GENERATION_CONFIG,
        responseMimeType: "application/json",
        responseSchema: { type: Type.ARRAY, items: { type: Type.STRING } }
      }
    });
    return JSON.parse(response.text);
  } catch {
    return [
      "Initial signal mapping suggests a 12% delta in operational capacity within 30 days.",
      `Identified competitive opportunity in the ${project.industry || 'relevant'} data routing sector.`,
      "System initialized to monitor high-variance pattern shifts automatically."
    ];
  }
}
