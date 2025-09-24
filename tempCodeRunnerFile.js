const fs = require("fs");

// fs.writeFileSync(
//   "temp.txt",
//   "this line is written by the the interview and assenment"
// );

// fs.rmdir("demofolder", (err) => {
//   if (err) {
//     console.log("some error accured during making folder");
//   } else {
//     console.log("folder created sussfully");
//   }
//   console.log(err);
// });

// fs.appendFile("temp.txt", " demo means appending the data into the ", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });


fs.readFile("temp.txt", (err, data) => {
  if (err) {
    console.log("some error accured");
  } else {
    console.log("data of the file is ", data.toString());
  }
});

let data = fs.readFileSync("temp.txt");
console.log(data.toString());
