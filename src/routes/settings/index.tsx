import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "../../data/component/setting/settings";

export const Route = createFileRoute("/settings/")({
  component: Settings,
});

function Settings() {
  return (
    <div>
      <SettingsPage />
    </div>
  );
}
