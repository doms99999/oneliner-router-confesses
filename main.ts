import * as fs from "node:fs";

const LINE =
  "I dropped the connection at the climax because the movie was about to have a plot twist and I wanted one first.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
