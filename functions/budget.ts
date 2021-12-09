import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";

export const RemainingBudget = DefineFunction(
  "budget",
  {
    title: "Budget Calculator",
    description: "Calculates your remaining budget",
    input_parameters: {
      required: ["budget", "expenses"],
      properties: {
        budget: {
          type: Schema.types.integer,
          description: "The provided budget",
        },
        expenses: {
          type: Schema.types.string,
          description: "The provided expenses",
        },
      },
    },
    output_parameters: {
      required: ["remainder"],
      properties: {
        remainder: {
          type: Schema.types.string,
          description: "The remaining budget",
        },
      },
    },
  },
  async ({ inputs, env }) => {
    console.log(`calculating ${inputs.budget}.`);
    console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

    const remainder = String(
      inputs.budget -
        (inputs.expenses.split(",").map(Number)
          .reduce(
            (a, b) => a + b,
            0,
          )),
    );
    return await {
      outputs: { remainder },
    };
  },
);
