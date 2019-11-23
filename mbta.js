const nStops = function (startLine, startStation, endLine, endStation){
    //This function calculated bliendly difference of indexes.
    return Math.abs(startLine.indexOf(startStation)-endLine.indexOf(endStation));
}
const stopsBetweenStations = function (lineA, stationA ,lineB, stationB){
    //Declaring lines as an object with the color of line as a string key returning an array of station names
    let line = {};
    line['red'] = ["","south station", "park street", "kendall",
    "central", "harvard", "porter", "davis", "alewife"],
    line['green'] = ["","goverment center",
    "park street", "boylston", "arlington", "copley", "hynes", "kenmore"],
    line['orange'] = ["north station", "haymarket", "park street", "state",
    "downtown crossing", "chinatown", "back bay", "forest hills"];

    //Declare lines as a global variable
    lineA = line[lineA.toLowerCase()]; lineB = line[lineB.toLowerCase()];
    stationA = stationA.toLowerCase(); stationB = stationB.toLowerCase();

    let transStation = "park street";
    let numberOfStops = 0;

    //Travelling on the same line
    if (lineA === lineB){
        numberOfStops = nStops(lineA,stationA,lineB,stationB)
        return numberOfStops;

    }else{
    //Travelling between different lines
        let tripA, tripB;
        tripA = nStops(lineA, stationA, lineA, transStation);
        tripB = nStops(lineB, transStation, lineB, stationB)
        numberOfStops = tripA +tripB;
        return numberOfStops;
    }
}

console.log(
    "\n",
    stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'),
    "\n",
    stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'),
    "\n",
    stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'))