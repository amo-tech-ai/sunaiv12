# Screen 12: ROI Progression (Day 30 Maturity)

## Progress Tracker Matrix
| Design | Logic | Agents | Testing | Status |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | [ ] | [ ] | [ ] | ⚪ |

## 1. Description & Purpose
- **Description**: The high-level ROI and maturity tracking view.
- **Purpose**: Proving the "Sun AI" value over time.
- **Goals**: Move from "Implementation" to "Operation" and eventually "Upgrade".

## 2. UI/UX Layout (3-Panel)
- **Left (Context)**: "Maturity Scores." Tracking 4 KPIs: Efficiency, Accuracy, Growth, and Security.
- **Main (Work)**: ROI charts ($ saved, hours saved). Progression slider (Day 1 -> Day 30).
- **Right (Intelligence)**: "Optimization Roadmaps." AI suggests Phase 2 and Phase 3 builds based on current success.

## 3. Features
- **Core**: ROI Charts, Maturity gauges.
- **Advanced**: Exportable "Executive Performance Report".

## 4. Content & Data
- `roi_metrics`: {dollars_saved, hours_gained}
- `maturity_levels`: {efficiency: 0.8, ...}
- `historical_delta`: array<DataPoints>

## 5. Real-World Use Cases
1. **Day 30**: Founder sees that AI has saved 120 man-hours. ROI is already positive.
2. **Day 60**: "Optimization Roadmap" suggests adding a "Voice Interface" because text support is so efficient.
3. **Board Meeting**: CEO exports the performance report to show AI integration progress.

## 6. User Journey
1. User clicks "Progression" from Nav.
2. User sees "Total Value Created" big numbers.
3. User toggles "Day 7" vs "Day 30" to see the "Learning Curve" in action.

## 7. AI Agents & Workflows
- **Scorer**: Calculates the maturity scores daily.
- **Analyst**: Generates the performance commentary.
- **Optimizer**: Identifies the next logical build step.
- **Workflow**: Daily Data Scrape -> Scorer Updates -> Analyst Comments -> UI Refreshes.

## 8. Gemini 3 Features & Tools
- **Model**: Gemini 3 Flash (for scoring) + Gemini 3 Pro (for roadmaps).
- **Code Execution**: Essential for calculating complex ROI deltas.
- **Structured Outputs**: Formats the chart data.
