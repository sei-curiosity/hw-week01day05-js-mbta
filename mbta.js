const subways = {
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
    "Chainatown",
    "Back Bay",
    "Forest Hills"
  ]
};

// this function should return the index of station in line
function getStationIndex(line, station) {
  return subways[line.toLowerCase()].indexOf(station);
}

function stopsBetweenStations(
  startLine,
  startStation,
  endLine,
  endStation,
  printInfo = true
) {
  // 1. convert startLine and endLine to lower case
  startLine = startLine.toLowerCase();
  endLine = endLine.toLowerCase();

  // Bonus -------------------
  // validate the lines
  const validateStartLine = validateLine(startLine);
  const validateEndLine = validateLine(endLine);

  if (validateStartLine || validateEndLine) {
    console.log("Invalid line\nValid lines are Red, Green, and Orange");
    return false;
  }

  // validate the subways
  const startStationValidation = validateStation(startLine, startStation);
  const endStationValidation = validateStation(endLine, endStation);

  if (startStationValidation || endStationValidation) {
    console.log("Invalid station.");
    return false;
  }

  if (printInfo) {
    // this function is responsable for the print
    print(startLine, startStation, endLine, endStation);
  }

  // ------------------- Bonus

  // 2. get start index
  const startIndex = getStationIndex(startLine, startStation);
  // 3. get the index of park street from start
  const startParkStreetIndex = getStationIndex(startLine, "Park Street");
  // 4. subtract park street index by startIndex to get the total of stops from start
  const totalStopsFromStart = startParkStreetIndex - startIndex;

  // 5. get end index
  const endIndex = getStationIndex(endLine, endStation);
  // 6. get the index of park street from end
  const endParkStreetIndex = getStationIndex(endLine, "Park Street");
  // 7. subtract park street index by endIndex to get the total of stops from end
  const totalStopsFromEnd = endParkStreetIndex - endIndex;

  let stops = 0;
  // 8. if start line is end line
  if (startLine === endLine) {
    // 9. subtract start index by end index
    stops = startIndex - endIndex;
  } else {
    // 10. add the total of stops from start to total of stops in end
    stops = Math.abs(totalStopsFromStart) + Math.abs(totalStopsFromEnd);
  }

  console.log(`Total of stops: ${stops}`);

  // return stops to jest for tests
  return stops;
}

function print(startLine, startStation, endLine, endStation) {
  const startIndex = getStationIndex(startLine, startStation);
  const endIndex = getStationIndex(endLine, endStation);

  let startSubways = [];
  startSubways = startSubways.concat(subways[startLine]);

  let endSubways = [];
  endSubways = endSubways.concat(subways[endLine]);

  let parkStreetStart = startSubways.indexOf("Park Street");
  let parkStreetEnd = endSubways.indexOf("Park Street");

  console.log(`Rider boards the train a ${startLine} Line and ${startStation}`);

  if (startIndex >= endIndex) {
    startSubways = startSubways.reverse();
  }

  if (startLine !== endLine) {
    if (startIndex >= endIndex) {
      parkStreetStart = startSubways.indexOf("Park Street");
      startSubways.splice(parkStreetStart + 1, endSubways.length);
    }

    endSubways.splice(0, parkStreetEnd + 1);
  }

  for (let i = 0; i < startSubways.length; i++) {
    const station = startSubways[i];

    if (startLine !== endLine) {
      if (station !== startStation && station !== "Park Street") {
        console.log(`Rider arrives at ${startLine} Line and ${station}.`);
      }

      if (station === "Park Street") {
        console.log(
          `Rider transfers from ${startLine} Line to ${endLine} Line at ${station}.`
        );

        for (let i = 0; i < startSubways.length; i++) {
          const stationEnd = subways[endLine][i];

          if (stationEnd !== endStation) {
            console.log(`Rider arrives at ${endLine} Line and ${stationEnd}.`);
          }

          if (stationEnd === endStation) {
            console.log(
              `Rider exits the train at ${endLine} Line and ${stationEnd}.`
            );
            return true;
          }
        }
      }
    } else {
      if (station === endStation) {
        console.log(`Rider exits the train at ${endLine} Line and ${station}.`);
        return true;
      }

      if (station !== startStation) {
        console.log(`Rider arrives at ${startLine} Line and ${station}.`);
      }
    }
  }
}

function validateLine(line) {
  const keys = Object.keys(subways);
  return !keys.includes(line);
}

function validateStation(line, subway) {
  return !subways[line].includes(subway);
}

stopsBetweenStations("Red", "Alewife", "Red", "Alewife"); // stops 0
console.log("-".repeat(30));
stopsBetweenStations("Red", "Alewife", "Red", "South Station"); // 7 stops
console.log("-".repeat(30));
stopsBetweenStations("Red", "South Station", "Green", "Kenmore"); // 6 stops

module.exports = stopsBetweenStations;
