let train = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
    Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
    Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
}
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {

    if ((train[startLine] === train.Red && train[endLine] === train.Red) //if (startLine == endLine) Red 
        || //or
        (train[startLine] === train.Green && train[endLine] === train.Green) //if (startLine == endLine) Green 
        || //or
        (train[startLine] === train.Orange && train[endLine] === train.Orange)) { //if (startLine == endLine) Orange
        for (let x = 0; x < train[startLine].length; x++) {
            if (x === train[startLine].indexOf(startStation)) {
                for (let y = 0; y < train[endLine].length; y++) {
                    if (y === train[endLine].indexOf(endStation)) {
                        let stopTimesR = y - x
                        if (stopTimesR < 0) {
                            return `${stopTimesR * -1} Stops`
                        } else {
                            return `${stopTimesR} Stops`
                        }
                    }
                }
            }
        }
    } else if (((train[startLine] === train.Red || train[startLine] === train.Orange) && train[endLine] === train.Green) || //  (endLine) Green
        ((train[startLine] === train.Green || train[startLine] === train.Orange) && train[endLine] === train.Red) ||        // (endLine) Red
        ((train[startLine] === train.Red || train[startLine] === train.Green) && train[endLine] === train.Orange)) {        //  (endLine) Orange

        for (let x = 0; x < train[startLine].length; x++) {
            if (x === train[startLine].indexOf(startStation)) {
                for (let y = 0; y < train[endLine].length; y++) {
                    if (y === train[endLine].indexOf(endStation)) {
                        let stopTimesR = y - x
                        if (stopTimesR < 0) {
                            return `${stopTimesR * -1} Stops`
                        } else {
                            return `${stopTimesR} Stops`
                        }
                    }
                }
            }
        }
    } else {
        return `You are in the wrong subway`
    }
}
console.log(stopsBetweenStations("Red", "South Station", "Green", "Kenmore"))