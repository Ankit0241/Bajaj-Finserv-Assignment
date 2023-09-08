const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8081; // Change this to the desired port number
const baseurl = "/bhfl";
app.use(bodyParser.json());

//GET METHOD
app.get(`${baseurl}`, (req, res) => {
// Define the response JSON object
const response = {
operation_code: 1,
};

// Send the JSON response with a 200 status code
res.status(200).json(response);
});

app.post(`${baseurl}/data`, (req, res) => {
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
} else if (charCode >= 48 && charCode <= 57) {
numbers.push(item);
}
} else {
if (item.length > 1) {
numbers.push(item);
}
}
}

const response = {
is_success: true,
user_id: "Ankit_Singh_2001",
email: "as3471@srmist.edu.in",
roll_number: "RA20110003011337",
numbers: numbers,
alphabets: alphabets,
highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
};

res.json(response);
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
