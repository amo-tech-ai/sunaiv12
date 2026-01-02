
import { Type } from "@google/genai";
import { ai, GENERATION_CONFIG } from "./config";
import { ProjectState, TimelineEvent } from "../../types";

/**
 * Generates a technical implementation roadmap based on system type and industry.
 */
export async function generateBlueprint(systemType: string, industry: string): Promise<string[]> {
  const prompt = `Generate a technical implementation roadmap for a ${systemType} system in the ${industry} industry. 
  Provide exactly 5 concise steps. Output as a JSON array of strings.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        ...GENERATION_CONFIG,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (e) {
    return [
      "Environment setup and security hardening",
      "Data ingestion and processing pipelines",
      "Core reasoning engine calibration",
      "Frontend interface development",
      "Final integration and deployment"
    ];
  }
}

/**
 * Generates a bespoke implementation timeline for the dashboard.
 */
export async function generateDetailedTimeline(project: ProjectState): Promise<TimelineEvent[]> {
  const prompt = `
    Role: Sun AI Project Manager
    Task: Generate a realistic 30-day implementation timeline for the following AI build:
    
    Industry: ${project.industry}
    System Type: ${project.systemType}
    Chosen Services: ${project.recommendations.map(r => r.title).join(", ")}
    
    Output exactly 4 milestones for the following phases:
    1. Initial Setup (Day 1)
    2. Architecture Build (Day 1-7)
    3. Integration & Testing (Day 8-20)
    4. Maturity & Go-Live (Day 30)

    Output JSON format: 
    [{ "date": string, "title": string, "status": "Done" | "Active" | "Pending", "desc": string }]
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
              date: { type: Type.STRING },
              title: { type: Type.STRING },
              status: { type: Type.STRING, enum: ["Done", "Active", "Pending"] },
              desc: { type: Type.STRING }
            },
            required: ["date", "title", "status", "desc"]
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch {
    return [
      { date: 'Initial', status: 'Done', title: 'Blueprint Sealed', desc: 'Architecture, security protocols, and human-in-the-loop checkpoints established.' },
      { date: 'Day 1-3', status: 'Active', title: 'Intelligence Provisioning', desc: 'Analyzing existing SOPs and website signals to prime the reasoning engines.' },
      { date: 'Day 4-10', status: 'Pending', title: 'Sandbox Integration', desc: 'Connecting the logic layer to your existing tech stack.' },
      { date: 'Day 30', status: 'Pending', title: 'Maturity Milestone', desc: 'First full performance audit and ROI validation report.' },
    ];
  }
}

/**
 * Provides realistic impact projections for business goals.
 */
export async function getImpactProjections(goals: string[]): Promise<{ label: string; value: string }[]> {
  const prompt = `Given these business goals: ${goals.join(", ")}, provide 3 realistic impact projections.
  Output JSON format: [{ "label": string, "value": string }]`;

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
              value: { type: Type.STRING }
            },
            required: ["label", "value"]
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (e) {
    return [
      { label: "Cost Reduction", value: "30-40%" },
      { label: "Throughput", value: "+2.5x" },
      { label: "Accuracy", value: "99.2%" }
    ];
  }
}
