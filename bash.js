const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmdArray = data.toString().trim().split(" ");
  let cmd = cmdArray[0];
  let fileName = cmdArray[1];
  switch (cmd) {
    case "pwd":
      pwd();
      break;
    case "ls":
      ls();
      break;
    case "cat":
      cat(fileName);
      break;
  }

  //   process.stdout.write("You typed: " / cmd);
  process.stdout.write("\nprompt > ");
});
