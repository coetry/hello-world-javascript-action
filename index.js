const core = require("@actions/core");
const github = require("@action/github");

try {
  const homie = core.getInput("homie-to-greet");
  console.log(`yo ${homie}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`Event payload: ${payload}`);
} catch ({ message }) {
  core.setFailed(message);
}
