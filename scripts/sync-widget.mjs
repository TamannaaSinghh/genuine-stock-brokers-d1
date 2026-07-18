// Copies the themed Enablestack build into public/ so Next.js serves it.
// Re-run after changing the widget colour/icon:
//   npx enablestack-widget-theme "#097a48" default && npm run widget:sync
import { copyFileSync } from "node:fs";

const src = "node_modules/enablestack-widget/dist/enablestack-widget.js";
const dest = "public/enablestack-widget.js";

copyFileSync(src, dest);
console.log(`Synced ${src} -> ${dest}`);
