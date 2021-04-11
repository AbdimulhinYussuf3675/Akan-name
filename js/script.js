var submission = function ()
let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
let maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
]
let femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
]
 let month = parseInt(document.getElementById("month").value);
let year = parseInt(document.getElementById("year").value);
let day = parseInt(document.getElementById("day").value);
let name =(document.getElementById("name").value);
let date0fbirth = new Date(year + "/" + month + "/" + day);
let results = date0fbirth.getDay();
let output = document.getElementById("output");
male = document.getElementById("male")
female = document.getElementById("female")