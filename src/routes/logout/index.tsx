import { createFileRoute } from "@tanstack/react-router";
import LogoutPage from "../../data/component/logoutComponent/logout";

export const Route = createFileRoute("/logout/")({
  component: Logout,
});

function Logout() {
  return (
    <div>
      <LogoutPage />
    </div>
  );
}
