import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { CalculateBudgetRemainder } from "../workflows/calc_budget.ts";

export const BudgetShortcut = DefineTrigger("calc_budget_shortcut", {
  type: TriggerTypes.Shortcut,
  name: "calculate",
  description: "Calculates your remaining budget",
})
  .runs(CalculateBudgetRemainder)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
  }));
