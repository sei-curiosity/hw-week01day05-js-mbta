const mbtaLine = {
    redLine:[
        'South Station',
        'Park Street',
        'Kendall',
        'Central',
        'Harvard',
        'Porter',
        'Davis',
        'Alewife'],
    greenLine: [
        'Government Center',
        'Park Street',
        'Boylston',
        'Arlington',
        'Copley',
        'Hynes',
        'Kenmore'],
    orange: [
        'North Station',
        'Haymarket',
        'Park Street',
        'State',
        'Downtown Crossing',
        'Chinatown',
        'Back Bay',
        'Forest Hills']
}
const stopsBetweenStations = function(Start_Line, Start_Station,End_Line,End_Station){
    let numberOfStops = 0
    if(Start_Line == End_Line && Start_Station == End_Station){
        numberOfStops = Math.abs(mbtaLine[End_Line].indexOf(End_Station) - mbtaLine[Start_Line].indexOf(Start_Station))
        //return numberOfStops
    }
    else if(Start_Line == End_Line && Start_Station !== End_Station){
        numberOfStops = Math.abs(mbtaLine[Start_Line].indexOf('Park Street') + mbtaLine[Start_Line].indexOf(End_Station))
        //return numberOfStops
    }
    else{
        numberOfStops = Math.abs(mbtaLine[Start_Line].indexOf('Park Street') + mbtaLine[Start_Line].indexOf(End_Station))
        //return numberOfStops
    }
}
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')) // 0 stops
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')) // 7 stops
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')) // 6 stops