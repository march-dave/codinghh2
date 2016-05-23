var fs = require("fs");

// // Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
   console.log("Synchronous read: " + data.toString());

            console.log("Program Ended");


// var fs = require("fs");

// console.log("Going to create directory ./test222222222222");
// fs.mkdir('./test222222222222',function(err){
fs.mkdir('./' + data, function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Directory created successfully!");
});


//
// console.log("Going to write into existing file");
// fs.writeFile('input.txt', 'Simply Easy Learning!',  function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("Data written successfully!");
//    console.log("Let's read newly written data");
//    fs.readFile('input.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("Asynchronous read: " + data.toString());
//    });
// });
