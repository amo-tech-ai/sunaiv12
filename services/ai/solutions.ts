
import { Type } from "@google/genai";
import { ai, GENERATION_CONFIG } from "./config";
import { ProjectState, ServiceRecommendation } from "../../types";

/**
 * Generates bespoke AI system recommendations with granular technical breakdowns.
 */
export async function generateRecommendations(project: ProjectState): Promise<ServiceRecommendation[]> {
  const prompt = `
    Role: Senior AI Solution Architect
    Task: Generate 3 premium AI system recommendations for an executive client.
    
    Client Context:
    - Company: ${project.companyName}
    - Industry: ${project.industry}
    - Primary Intent: ${project.systemType}
    - Strategic Goals: ${project.goals.join(", ")}
    - Description: ${project.description}

    Requirements:
    - Recommendations must be highly specific to the industry and business goals.
    - Include a list of 3-4 granular technical requirements or sub-modules for each service.
    
    Output JSON format: 
    [{ 
      "title": string, 
      "description": string, 
      "impact": string, 
      "tier": "Core" | "Advanced",
      "technicalRequirements": string[] 
    }]
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
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              impact: { type: Type.STRING },
              tier: { type: Type.STRING, enum: ["Core", "Advanced"] },
              technicalRequirements: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Granular technical sub-modules or implementation requirements."
              },
            },
            required: ["title", "description", "impact", "tier", "technicalRequirements"],
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch {
    return [
      { 
        title: "Intelligence Orchestration Layer", 
        description: "Centralized reasoning node for executive decision support and system-wide automation control.", 
        impact: "+25% Operational Efficiency", 
        tier: "Core",
        technicalRequirements: ["Vector context windows", "Multi-agent handoff protocols", "Secure API gateway"]
      },
      { 
        title: "Proprietary Knowledge RAG Index", 
        description: "Dynamic knowledge retrieval system grounded in company SOPs and historical market data.", 
        impact: "Zero Information Latency", 
        tier: "Advanced",
        technicalRequirements: ["Hybrid search indexing", "Document chunking pipelines", "Metadata filtering"]
      },
      { 
        title: "Strategic Impact Monitor", 
        description: "Real-time KPI tracking and anomaly detection engine linked to business outcomes.", 
        impact: "Proactive Risk Mitigation", 
        tier: "Core",
        technicalRequirements: ["Stream analytics hooks", "Impact attribution logic", "Executive alerting system"]
      }
    ];
  }
}
