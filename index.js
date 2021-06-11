// 1. Declare and assign the variables here:
const shuttleName = 'Determination';
const shuttleSpeedMph = 17500
const distanceToMarsKm = 225000000
const distanceToTheMoonKm = 384400
const milesPerKilometerKm = 0.621


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log (typeof shuttleName)
console.log (typeof shuttleSpeedMph)
console.log (typeof shuttleSpeedMph)
console.log (typeof distanceToMarsKm)
console.log (typeof distanceToTheMoonKm)
console.log (typeof milesPerKilometerKm)

// Code your solution to exercises 3 and 4 here:
let milesToMars = distanceToMarsKm*milesPerKilometerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24
console.log (shuttleName + " will take " +  daysToMars + " days to reach Mars.")

// Code your solution to exercise 5 here:
let milesToMoon = distanceToTheMoonKm / milesPerKilometerKm
let hoursToMoon = milesToMoon / shuttleSpeedMph
let daysToMoon = hoursToMoon / 24
console.log (shuttleName + " will take " + daysToMoon + " days to reach the Moon.")