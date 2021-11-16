import { DefineTable, Schema } from "slack-cloud-sdk/mod.ts";

// Here's a sample Table definition :)
// To include this in your project, you'll want to add it in your project.ts like so:
/**
 * // Import it into project.ts
 * import { DinosTable } from "./tables/dinos.ts";
 *
 * // Register it in the Project() call alongside your other configuration
 * Project({
 *   ...
 *   tables: [DinosTable],
 * });
 */
export const DinosTable = DefineTable("dinos", {
  primary_key: "id",
  columns: {
    id: {
      type: Schema.types.string,
    },
    original_name: {
      type: Schema.types.string,
    },
    dino_name: {
      type: Schema.types.string,
    },
    user_id: {
      type: Schema.slack.types.user_id,
    },
  },
});
