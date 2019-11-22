let mbta = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
    Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
    Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],
    stopsBetweenStations: function (startLine, startStation, endLine, endSatation) {
       
        let mess = " not an available staion"
        let start = 0
        let end = 0
        let diffS = function (indexStart, indexPark, lengthLine) {
            lengthLine -= 1
            if (indexStart > indexPark) {
                return (lengthLine - indexStart) + (lengthLine - indexPark)
            } else if (indexStart < indexPark) {
                return indexPark - indexStart
            } else {
                return 0
            }
        }
        
        if (startLine == "Red" || startLine == "Green" || startLine == "Orange") {
            if (startStation === endSatation && startLine == endLine) {
                return 0
            }
            if (startLine == endLine) {
                let lengthOfLine=this[startLine].length 
                let indexOfstation =(this[startLine].indexOf(startStation))
                let indexOfEnd=(this[endLine].indexOf(endSatation))
                
                return diffS(indexOfstation,indexOfEnd,lengthOfLine)
            }
            if (this[startLine].includes(startStation) === false) {
                return mess
            }
            start = diffS(mbta[startLine].indexOf(startStation), mbta[startLine].indexOf("Park Street"), mbta[startLine].length)

        } else {
            return "the first line is not available"
        }

        if (endLine == "Red" || endLine == "Green" || endLine == "Orange") {
            if (this[endLine].includes(endSatation) === false) {
                return mess
            }
            end = diffS(mbta[endLine].indexOf("Park Street"), mbta[endLine].indexOf(endSatation), mbta[endLine].length)
        } else {
            return "the second line is not available "
        }


        return start + end

    },
}

console.log(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'))
console.log(mbta.stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'))
console.log(mbta.stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'))