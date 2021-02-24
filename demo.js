var fs = require("fs");
var data = require("./data.json");


// READ FROM FILES
console.log(data.name);  // returns string from object

fs.readFile("./data.json", "utf-8", (err, data) => {
    var data = JSON.parse(data);  // data needs to be parsed in order to read as object
    console.log(data.name);  // this will output a string;  without JSON.parse it would return undefined
});


// READ DIRECTORY
fs.readdir("c:/", (err, data) => {
    console.log(data);
});

// WRITE TO A FILE
var data2 = {
    name: "Bocephus"
};

fs.writeFile("data2.json", JSON.stringify(data2), (err) => {
    console.log("write finished", err);
});