const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    let num = 0;

    const lines = {
        Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
        Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
        Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],
    };

    if (startLine === endLine) {
        num += Math.abs(lines[startLine].indexOf(startStation) - lines[endLine].indexOf(endStation));
    } else {
        num += Math.abs(lines[startLine].indexOf(startStation) - lines[startLine].indexOf('Park Street'));
        num += Math.abs(lines[endLine].indexOf('Park Street') - lines[endLine].indexOf(endStation));
    }

    return num;
}

console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')); // 0 stops
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')); // 7 stops
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')); // 6 stops