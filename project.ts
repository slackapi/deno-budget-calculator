import { Project } from "slack-cloud-sdk/mod.ts";
import { BudgetShortcut } from "./triggers/budget_shortcut.ts";

Project({
  name: "Calculate remaining budget",
  description: "An app that calculates remaining budget based on expenses.",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  triggers: [BudgetShortcut],
  outgoingDomains: [],
});
