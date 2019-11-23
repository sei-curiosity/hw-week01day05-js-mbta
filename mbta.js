let lineRed = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];
let lineGreen = ['Government', 'Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
let lineOrange = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];
let lines = [lineRed, lineGreen, lineOrange],
    stops = 0,
    mainStation = "Park Street";

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    let tmp = 0;
    //check
    if (startLine.toLowerCase() != 'red' && startLine.toLowerCase() != 'orange'&&startLine.toLowerCase() !='green' 
    && endLine.toLowerCase() !='red'&& endLine.toLowerCase() != 'orange'&& endLine.toLowerCase() !='green') {
        tmp = "Not a valid line";
        return tmp;
    }

    switch (startLine) {
        case 'red':
            startLine = lineRed;
            break;
        case 'green':
            startLine = lineGreen;
            break;
        case 'orange':
            startLine = lineOrange;

    }

    switch (endLine) {
        case 'red':
            endLine = lineRed;
            break;
        case 'green':
            endLine = lineGreen;
            break;
        case 'orange':
            endLine = lineOrange;

    }
    ///check
    if(startLine.includes(startStation)==false){
        tmp = "Not a valid station";
        return tmp;
    }
    if(endLine.includes(endStation)==false){
        tmp = "Not a valid station";
        return tmp;
    }
    //start count ride and print
    if (startLine == endLine) {
        tmp = countInSameLine(startLine, startStation, endLine, endStation);
    } else {
        tmp = countFromStartStation(startLine, startStation) + countToEndStation(endLine, endStation);
    }

    printTheRide(startLine, startStation, endLine, endStation);
    return tmp;
}

const printTheRide = function (startLine, startStation, endLine, endStation) {
    let startLineColor = "_";
    let endLineColor = "_";
    startLine == lineRed ? startLineColor = "Red" : startLine == lineGreen ? startLineColor = "Green" : startLineColor = "Orange";
    endLine == lineRed ? endLineColor = "Red" : endLine == lineGreen ? endLineColor = "Green" : endLineColor = "Orange";
    console.log(`Rider boards the train a ${startLineColor} Line and ${startStation} Station.`);

    ///working for one line
    if (startLine == endLine) {
        startLine.forEach((station) => {


            if (station == startStation) {
                if (startLine.indexOf(startStation) < endLine.indexOf(endStation)) {
                    for (let i = startLine.indexOf(startStation) + 1; i < startLine.length; i++) {
                        console.log(`Rider arrives at ${startLineColor} Line and ${startLine[i]}.`);
                    }

                } else {
                    for (let i = startLine.indexOf(startStation) - 1; i >= 0; i--) {
                        if (endStation !== station) {
                            console.log(`Rider arrives at ${startLineColor} Line and ${startLine[i]}.`);
                        }
                    }
                }
            }
        })
    }
    ///working for tow lines
    if (startLine !== endLine) {
        startLine.forEach((station) => {
            if (station == startStation) {
                if (startLine.indexOf(startStation) < startLine.indexOf(mainStation)) {
                    for (let i = startLine.indexOf(startStation) + 1; i <= startLine.indexOf(mainStation); i++) {
                        console.log(`Rider arrives at ${startLineColor} Line and ${startLine[i]}.`);
                    }

                } else {
                    for (let i = startLine.indexOf(startStation) - 1; i >= startLine.indexOf(mainStation); i--) {
                        if (endStation !== station) {
                            console.log(`Rider arrives at ${startLineColor} Line and ${startLine[i]}.`);
                        }
                    }
                }
                console.log(`Rider transfers from ${startLineColor} Line to ${endLineColor} Line at ${mainStation}.`)


            }
        })
        endLine.forEach((station) => {
            if (station == endStation) {
                if (endLine.indexOf(mainStation) < endLine.indexOf(endStation)) {
                    for (let i = endLine.indexOf(mainStation) + 1; i <= endLine.indexOf(endStation); i++) {
                        console.log(`Rider arrives at ${endLineColor} Line and ${endLine[i]}.`);
                    }

                } else {
                    for (let i = endLine.indexOf(mainStation) - 1; i >= endLine.indexOf(endStation); i--) {
                        if (endStation !== station) {
                            console.log(`Rider arrives at ${endLineColor} Line and ${endLine[i]}.`);
                        }
                    }
                }
            }
        })
    }
    console.log(`Rider exits the train at ${endLineColor} Line and ${endStation} Station.`);
}

const countInSameLine = function (startLine, startStation, endLine, endStation) {
    if (startLine.indexOf(startStation) > endLine.indexOf(endStation)) {
        return startLine.indexOf(startStation) - endLine.indexOf(endStation);
    } else {
        return endLine.indexOf(endStation) - startLine.indexOf(startStation);
    }
}

const countFromStartStation = function (startLine, startStation) {
    let tmp = 0;
    startLine.forEach((station) => {

        if (station.toLowerCase() == startStation.toLowerCase()) {
            if (startLine.indexOf(station) < startLine.indexOf(mainStation)) {
                tmp = (startLine.indexOf(mainStation) - startLine.indexOf(station));
            } else {
                tmp = (startLine.indexOf(station) - startLine.indexOf(mainStation));

            }
        }
    });
    return tmp;
}

function countToEndStation(endLine, endStation) {
    let tmp = 0;
    endLine.forEach((station) => {
        if (station.toLowerCase() == endStation.toLowerCase()) {
            if (endLine.indexOf(station) < endLine.indexOf(mainStation)) {
                tmp = (endLine.indexOf(mainStation) - endLine.indexOf(station));
            } else {
                tmp = (endLine.indexOf(station) - endLine.indexOf(mainStation));
            }
        }
    });
    return tmp;
}

stops = stopsBetweenStations('green', 'Center', 'orange', 'Chinatown');
console.log(`${stops} Stops`);