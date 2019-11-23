let mbta = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
    Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
    Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],
    stopsBetweenStations: function (startLine, startStation, endLine, endSatation) {
  
        if ((startLine == "Red" || startLine == "Green" || startLine == "Orange") && (endLine == "Red" || endLine == "Green" || endLine == "Orange")) {
            if (startStation === endSatation && startLine == endLine) {
                return 0
            }
            if (this[startLine].includes(startStation) === false || this[endLine].includes(endSatation) === false) {
                if (startStation === endSatation && startLine == endLine) {
                    return 0
                }
                return " one of the stations is not available "
            }   
            return Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf("Park Street")) + Math.abs(mbta[endLine].indexOf("Park Street") - mbta[endLine].indexOf(endSatation))
        } else {
            return "one of the lines is not available"
        }
    },
}
console.log(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'))
console.log(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'))
console.log(mbta.stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'))
