const mbta = {
  red: [
    "South Station",
    "Park Street",
    "Kendall",
    "Central",
    "Harvard",
    "Porter",
    "Davis",
    "Alewife"
  ],
  green: [
    "Government Center",
    "Park Street",
    "Boylston",
    "Arlington",
    "Copley",
    "Hynes",
    "Kenmore"
  ],
  orange: [
    "North Station",
    "Haymarket",
    "Park Street",
    "State",
    "Downtown Crossing",
    "Chinatown",
    "Back Bay",
    "Forest Hills"
  ]
};

const stopsBetweenStations = function(
  startLine,
  startStation,
  endLine,
  endStation
) {
  if (startLine === endLine) {
    numOfStations = Math.abs(
      mbta[startLine].indexOf(endStation) -
        mbta[startLine].indexOf(startStation)
    );
  } else {
    numOfStations =
      Math.abs(
        mbta[startLine].indexOf("Park Street") -
          mbta[startLine].indexOf(startStation)
      ) +
      Math.abs(
        mbta[endLine].indexOf(endStation) - mbta[endLine].indexOf("Park Street")
      );
  }
  return numOfStations;
};

console.log(stopsBetweenStations("red", "Alewife", "red", "Alewife"));
console.log(stopsBetweenStations("red", "South Station", "red", "Alewife"));
console.log(stopsBetweenStations("red", "South Station", "green", "Kenmore"));
console.log("\n");
console.log(stopsBetweenStations("orange", "Back Bay", "green", "Kenmore"));
console.log(stopsBetweenStations("red", "Davis", "red", "Harvard"));
console.log(stopsBetweenStations("red", "South Station", "red", "Park Street"));
