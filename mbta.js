
const mbta = function (startLine, startStation, endLine, endStation) {
    //Checking if the selected lines are valid selections
    const lines = ['red', 'green', 'orange'];
    if (!(startLine && endLine && lines.indexOf(startLine.toString().toLowerCase()) >= 0 && lines.indexOf(endLine.toString().toLowerCase()) >= 0))
        return "Please select one of available lines: red, green, or orange"

    const lSLine = startLine.toLowerCase();//lowercase start line
    const lELine = endLine.toLowerCase();//lowercase end line

    //Creating an object of the lines and stations
    const stops = {
        red: ['south station', 'park street', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
        green: ['government center', 'park street', 'boylston', 'arlington', 'copley', 'hynes', 'kenmore'],
        orange: ['north station', 'haymarket', 'park street', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
    }

    //Verifying that the selected stations are valid selections
    if (!(startStation && endStation && stops[lSLine].indexOf(startStation.toString().toLowerCase()) > 0 && stops[lELine].indexOf(endStation.toString().toLowerCase()) > 0))
        return "Please select one of the available stations: \n red line stations: South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, and Alewife. \n green line stations: Government Center, Park Street, Boylston, Arlington, Copley, Hynes, and Kenmore. \n orange line stations: North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, and Forest Hills."

    const lSStation = stratStation.toLowerCase();//lowercase start station
    const lEStation = endStation.toLowerCase();//lowercase end station

    //Finding the postions of the stations
    const sS = stops[lSLine].indexOf(lSStation);
    const eS = stops[lELine].indexOf(lEStation);



    //calculating the number of stops
    if (lSLine == lELine) {
        return Math.abs(eS - sS);
    }
    return Math.abs(sS - stops[lSLine].indexOf('park street')) + Math.abs(eS - stops[lELine].indexOf('park street'));

}
