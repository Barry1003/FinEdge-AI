import { createFileRoute } from "@tanstack/react-router";
import { ExpenseReportsPage } from "../../data/component/expenseReport/expenseReport";

export const Route = createFileRoute("/expenseReport/")({
  component: ExpenseReport,
});

function ExpenseReport() {
  return (
    <div>
      <ExpenseReportsPage />
    </div>
  );
}
