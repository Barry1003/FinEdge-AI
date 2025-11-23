import { createFileRoute } from "@tanstack/react-router";
import InsightsPage from "../../data/component/insights/insight";

export const Route = createFileRoute("/insights/")({
  component: Insights,
});

function Insights() {
  return (
    <div>
      <InsightsPage />
    </div>
  );
}
