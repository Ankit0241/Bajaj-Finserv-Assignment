const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8081; // Change this to the desired port number
const baseurl = "/bhfl";
app.use(bodyParser.json());

app.post("/data", (req, res) => {
const inputData = req.body.data;
const numbers = [];
const alphabets = [];
let highestAlphabet = null;

for (let i = 0; i < inputData.length; i++) {
const item = inputData[i];
if (typeof item === "string" && item.length === 1) {
const charCode = item.charCodeAt(0);
if (
(charCode >= 65 && charCode <= 90) ||
(charCode >= 97 && charCode <= 122)
) {
alphabets.push(item);
if (
!highestAlphabet ||
item.localeCompare(highestAlphabet, undefined, {
sensitivity: "base",
}) > 0
) {
highestAlphabet = item;
}
} else {
// Check if it's a number
numbers.push(item);
}
}
}

const response = {
is_success: true,
user_id: "as3471",
email: "as3471@srmist.edu.in",
roll_number: "RA2011003011337",
numbers: numbers,
alphabets: alphabets,
highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
};

res.json(response);
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
