const fs = require("fs");

// module.exports = function (fileName) {
//   fs.readFile("./fileName", "utf8", (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       process.stdout.write(files.join("\n"));
//     }
//   });
// };

module.exports = function (fileName) {
  console.log(fileName);
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
