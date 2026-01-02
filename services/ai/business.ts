
import { Type } from "@google/genai";
import { ai, GENERATION_CONFIG } from "./config";
import { ProjectState, MarketSignal, StrategicBlueprint } from "../../types";

/**
 * Analyzes business description and website for strategic opportunities.
 */
export async function analyzeBusinessSignals(description: string, website?: string): Promise<MarketSignal[]> {
  const prompt = `
    Role: Senior AI Strategy Analyst
    Task: Analyze business description and website for strategic opportunities.
    Description: ${description}
    Website: ${website || 'N/A'}
    
    Output JSON format: [{ "label": string, "value": string, "confidence": number }]
    Labels should reflect executive KPIs (e.g., "Industry Velocity", "Digital Maturity", "Automation Potential").
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        ...GENERATION_CONFIG,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              label: { type: Type.STRING },
              value: { type: Type.STRING },
              confidence: { type: Type.NUMBER }
            }
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (e) {
    return [
      { label: "Industry Pulse", value: "Emerging Market", confidence: 0.85 },
      { label: "AI Readiness", value: "High Potential", confidence: 0.9 }
    ];
  }
}

/**
 * Generates a high-level strategic blueprint for the project.
 */
export async function generateStrategicBlueprint(project: Partial<ProjectState>): Promise<StrategicBlueprint> {
  const prompt = `
    Role: Sun AI Lead Architect
    Context: Designing a strategic blueprint for ${project.companyName}.
    Industry: ${project.industry}
    Goals: ${project.goals?.join(", ")}
    System Archetype: ${project.systemType}
    Operational Intent: ${project.description}

    Requirement: Provide a strategic blueprint in plain business language.
    Focus on business outcomes and agentic roles.

    Output JSON format: {
      "purpose": "string (System Name + Value, e.g. AI-Enhanced CRM for Sales Growth)",
      "primary_focus": "Growth" | "Efficiency" | "Experience" | "Scale",
      "recommended_systems": ["string (2-3 high-level system components)"],
      "recommended_ai_roles": ["string (3 specific Agent personas, e.g. Advisor, Analyst)"],
      "complexity_level": "Low" | "Medium" | "High" | "Enterprise",
      "short_explanation": "string (1-sentence strategic rationale)",
      "summary_bullets": ["string (3-4 short business-term bullets of what it will do)"]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        ...GENERATION_CONFIG,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            purpose: { type: Type.STRING },
            primary_focus: { type: Type.STRING, enum: ["Growth", "Efficiency", "Experience", "Scale"] },
            recommended_systems: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommended_ai_roles: { type: Type.ARRAY, items: { type: Type.STRING } },
            complexity_level: { type: Type.STRING, enum: ["Low", "Medium", "High", "Enterprise"] },
            short_explanation: { type: Type.STRING },
            summary_bullets: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["purpose", "primary_focus", "recommended_systems", "recommended_ai_roles", "complexity_level", "short_explanation", "summary_bullets"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch {
    return {
      purpose: "Scalable Intelligence Layer",
      primary_focus: "Efficiency",
      recommended_systems: ["Intelligence Orchestration Layer", "Data Pipeline"],
      recommended_ai_roles: ["Systems Analyst", "Outcome Manager", "Automation Assistant"],
      complexity_level: "Medium",
      short_explanation: `This architecture balances rapid deployment with long-term adaptability for your business.`,
      summary_bullets: [
        "Automate repetitive operational data flow",
        "Provide real-time executive decision support",
        "Monitor system performance for continuous ROI"
      ]
    };
  }
}
