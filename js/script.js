var results = function () {
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  let femaleNames = [
    "Akosua",
    " Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  let century = parseInt(document.getElementById("century").value);
  let year = parseInt(document.getElementById("year").value);
  let month = parseInt(document.getElementById("month").value);
  let day = parseInt(document.getElementById("day").value);
  let daysOfBirth = new Date(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7
  if (month == "0" && year == "0" && day == "0") {
    alert("Please Enter valid record ");
    return false;
  }
}