const fs = require("fs");

let FirstNames = [
  "Emma",
  "Olivia",
  "Ava",
  "Isabella",
  "Sophia",
  "Mia",
  "Charlotte",
  "Amelia",
  "Harper",
  "Evelyn",
  "Abigail",
  "Emily",
  "Ella",
  "Elizabeth",
  "Camila",
  "Luna",
  "Sofia",
  "Avery",
  "Mila",
  "Aria",
];

let LastNames = [
  "Jones",
  "Garcia",
  "Miller",
  "Taylor",
  "Martinez",
  "Davis",
  "Clark",
  "Gonzalez",
  "Allen",
  "Scott",
  "Parker",
  "Wright",
  "Young",
  "Mitchell",
  "Walker",
  "Hall",
  "King",
  "Green",
  "Adams",
  "Campbell",
];

let Departments = [
  "Marketing",
  "Finance",
  "Human Resources",
  "Information Technology",
  "Sales",
  "Customer Service",
  "Research and Development",
  "Operations",
];

let CluserPairs = [
  { city: "Delhi", lat: 28.7041, lng: 77.1025 },
  { city: "Mumbai", lat: 19.076, lng: 72.8777 },
  { city: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { city: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { city: "Chennai", lat: 13.0827, lng: 80.2707 },
  { city: "Jaipur", lat: 26.9124, lng: 75.7873 },
  { city: "Hyderabad", lat: 17.385, lng: 78.4867 },
  { city: "Bhopal", lat: 23.2599, lng: 77.4126 },
  { city: "Aurangabad", lat: 19.8762, lng: 75.3433 },
  { city: "Nagpur", lat: 21.1458, lng: 79.0882 },
];

function generateRandom(lower, upper) {
  let temp1 = Math.random() * upper + lower;

  return Math.floor(temp1);
}

let DATA = [];

for (let i = 1; i <= 50; i++) {
  let fnameInd = generateRandom(0, FirstNames.length);
  let lnameInd = generateRandom(0, LastNames.length);
  let departmentInd = generateRandom(0, Departments.length);
  let locationInd = generateRandom(0, CluserPairs.length);

  let name = FirstNames[fnameInd] + " " + LastNames[lnameInd];
  let department = Departments[departmentInd];
  let location1 = CluserPairs[locationInd];

  DATA.push({
    id: i,
    name: name,
    department,
    department,
    position: {
      lat: location1.lat + Math.random() / 20,
      lng: location1.lng + Math.random() / 20,
    },
    city: location1.city,
  });
}

console.log(DATA);

fs.writeFileSync("database.json", JSON.stringify(DATA));
