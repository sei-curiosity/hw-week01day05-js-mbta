let subwayLines = {

Red: ['South Station' , 'Park Street' , 'Kendall' , 'Central' , 'Harvard' , 'Porter' , 'Davis' , 'Alewife'],
Green: ['Government Center', 'Park Street' , 'Boylston' , 'Arlington' , 'Copley' , 'Hynes' , 'Kenmore'],
Orange: ['North Station' , 'Haymarket' , 'Park Street' , 'State' , 'Downtown Crossing' , 'Chinatown' , 'Back Bay' , 'Forest Hills']

} // end of subwayLines object

function stopsBetweenStations(startLine, startStation, endLine, endStation){

let stops = 0
let startIndex = subwayLines[startLine].indexOf(startStation)
let endIndex = subwayLines[endLine].indexOf(endStation)
let startLineParkStreetIndex = subwayLines[startLine].indexOf("Park Street")

    if (startLine == endLine){

    stops = Math.abs(endIndex - startIndex)
    console.log(`${stops} stops`)

    } // end if it's the same Line

    else {
        
        let stopsOfFirstLine = Math.abs(startLineParkStreetIndex - startIndex)
        let parkStreetOfEndLine = subwayLines[endLine].indexOf("Park Street")
        let stopsOfEndLine = Math.abs(parkStreetOfEndLine - endIndex)
        let finalStopsOfLines = stopsOfFirstLine + stopsOfEndLine
        console.log(`${finalStopsOfLines} stops `)

    } // if it's different Lines

} // end of stopsBetweenStations func

stopsBetweenStations("Red","South Station","Green","Kenmore")

stopsBetweenStations("Red","Alewife","Red","Alewife")

stopsBetweenStations("Red","Alewife","Red","South Station")

//stopsBetweenStations("Orange","Chinatown","Green","Copley")