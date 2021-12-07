import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { RemainingBudget } from "../functions/budget.ts";

export const CalculateBudgetRemainder = DefineWorkflow("calculate_budget", {
  title: "Calculate Remaining Budget",
  description: "Calculates your remaining budget from a provided number.",
  input_parameters: {
    required: ["budget", "expenses", "channel"],
    properties: {
      budget: {
        type: Schema.types.integer,
        description: "What's your total budget?",
      },
      expenses: {
        type: Schema.types.string,
        description: "List your expenses, separated by commas",
      },
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel to send remaining budget",
      },
    },
  },
});

const step1 = CalculateBudgetRemainder.addStep(RemainingBudget, {
  budget: CalculateBudgetRemainder.inputs.budget,
  expenses: CalculateBudgetRemainder.inputs.expenses,
});

CalculateBudgetRemainder.addStep(Schema.slack.functions.SendMessage, {
  channel_id: CalculateBudgetRemainder.inputs.channel,
  message:
    `You have *$${step1.outputs.remainder}* remaining from your budget of *$${CalculateBudgetRemainder.inputs.budget}* :money_with_wings:`,
});
