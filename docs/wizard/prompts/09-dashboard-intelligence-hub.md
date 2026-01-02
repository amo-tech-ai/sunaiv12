# Screen 09: Intelligence Hub (Strategic Insights)

## Progress Tracker Matrix
| Design | Logic | Agents | Testing | Status |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | [ ] | [ ] | [ ] | ⚪ |

## 1. Description & Purpose
- **Description**: The core "Strategy" layer where the system shows it is thinking for the business.
- **Purpose**: Proactive value. Highlighting opportunities the user hasn't seen yet.
- **Goals**: Upsell and retention through data-driven insight.

## 2. UI/UX Layout (3-Panel)
- **Left (Context)**: "Market Benchmarks." Shows industry averages vs the client's current performance.
- **Main (Work)**: A feed of "Insight Cards." Cards like "Anomaly Detected" or "Conversion Opportunity."
- **Right (Intelligence)**: "Deep Research Panel." When an insight is clicked, Gemini performs a search to find supporting data.

## 3. Features
- **Core**: Daily insight feed, Risk/Opportunity tagging.
- **Advanced**: "What-if" simulator (Code Execution).

## 4. Content & Data
- `insights`: array<{type: 'risk' | 'opt', text, impact_score}>
- `market_context`: JSON
- `recommendations`: array<Actions>

## 5. Real-World Use Cases
1. **E-commerce**: Insight: "Mobile conversion dropped in Region X." Deep Research finds: "Competitor Y launched a 20% sale today."
2. **Real Estate**: Insight: "Increase in 'Relocation' queries." Recommendation: "Deploy Relocation-specific landing page."
3. **Agency**: Insight: "Efficiency gain of 22% in client reporting." Recommendation: "Pass savings to higher-value strategy work."

## 6. User Journey
1. User sees "New Insight" notification.
2. User opens Hub.
3. User clicks "Expansion Opportunity".
4. Right panel loads a "Deep Research" report showing local market trends via Google Search.

## 7. AI Agents & Workflows
- **Analyst**: Scans system logs and market data for patterns.
- **Scorer**: Ranks insights by "Business Impact Score".
- **Workflow**: New Market Event -> Analyst Scans -> Generate Insight -> Notify User.

## 8. Gemini 3 Features & Tools
- **Model**: Gemini 3 Pro (Deep reasoning & research).
- **Google Search Grounding**: Critical for providing real-world context for insights.
- **Deep Research (Feature)**: Used for the right panel long-form reports.
