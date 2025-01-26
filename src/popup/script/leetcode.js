import { loadConfigs } from "../service/configService";
import { submissionListener } from "./submission";

console.log(`Hello Leetcode-Mastery-Scheduler!`);

await loadConfigs();
document.addEventListener('click', submissionListener);

