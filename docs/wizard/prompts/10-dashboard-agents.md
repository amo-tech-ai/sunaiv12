# Screen 10: AI Team & Automations (Digital Workforce)

## Progress Tracker Matrix
| Design | Logic | Agents | Testing | Status |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | [ ] | [ ] | [ ] | ⚪ |

## 1. Description & Purpose
- **Description**: A management view of the active AI agents working for the business.
- **Purpose**: Personification. Moving AI from "Features" to "Teammates".
- **Goals**: Manage permissions and monitor agent health.

## 2. UI/UX Layout (3-Panel)
- **Left (Context)**: "Workforce Overview." Totals on tasks handled and accuracy rates.
- **Main (Work)**: "Employee File" cards. Each agent (Concierge, Analyst, etc.) has a card with name, role, status, and "Memory" used.
- **Right (Intelligence)**: "Interaction Logs." A live-stream of what the agents are currently "saying" or "doing."

## 3. Features
- **Core**: Agent cards, Status toggles, Role descriptions.
- **Advanced**: "Agent Training" (Upload a PDF to update an agent's knowledge).

## 4. Content & Data
- `agents`: array<{id, name, type, health, tasks_completed}>
- `system_logs`: array<LogEntry>
- `agent_knowledge_base`: array<DocRefs>

## 5. Real-World Use Cases
1. **The Support Bot**: Status: "Busy - 12 Conversations". Log shows: "Successfully resolved refund inquiry for Order #402."
2. **The Analyst Agent**: Status: "Idle". Log shows: "Completed daily market scan at 04:00 AM."
3. **The Controller**: Status: "Awaiting Action". Log shows: "Flagged $5,000 invoice for human approval."

## 6. User Journey
1. User enters the Team view.
2. User sees the "Concierge" is working hard.
3. User clicks "Configure" on the Concierge to update its "Tone" from "Friendly" to "Professional".

## 7. AI Agents & Workflows
- **Orchestrator**: Manages the "Hand-offs" between agents.
- **Controller**: Displays the "Approval Queue" here.
- **Workflow**: Human Approves -> Controller Releases Action -> Orchestrator Notifies Agent.

## 8. Gemini 3 Features & Tools
- **Model**: Gemini 3 Flash (for logs) + Gemini 3 Pro (for configuration).
- **Function Calling**: Used when a user toggles an agent "On" or "Off".
- **Interactions API**: Used to display the live interaction logs.
