

// Caclulate the number of stops between stations on the "MBTA
// we have three stations Red,Green, Orange.

// The function takes ( the line and, the stop station that the rider is getting on,
//) the stop station that rider is getting off
//stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')

// return the total number of the stops

const MBTA = {

    RedLine:
            ['SouthStation',
'ParkStreet',
'Kendall',
'Central',
'Harvard',
'Porter',
'Davis',
'Alewife' ],     
    

    GreenLine:['Government Center',
    'ParkStreet',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore '], 

    OrangeLine:['North Station',
    'Haymarket',
    'ParkStreet',
    'State',
    'DowntownCrossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills'] 
}


const stopsBetweenStations =  (startLine, startStation, endLine , endStation) 
{

 
    console.log( `StartLine ${startLine} EndLine= ${endLine}` )

    if ( startLine=== endLine)
    {
        const stopList ={} 
        let stopNumber= 0
        let station1 = 0 
        let station2 = 0 

        console.log(MBTA[startLine].length)

        for (let i = 0; i<= MBTA[startLine].length ;++i)

        {
            const stop = startLine[i]
            stopList[stop] = i
            console.log( stopList[stop] + stop)
        }
           station1 = Math.max (stopList[startstation], stopList[endStation])
           station2 =Math.max( stopList[startStation], stopList [endStation])

           console.log (stopNumber)


    } else {
        console.log('Not Stopped')
    }


}
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') 



//console.log ("Green Line Distination:" + MBTA.GreenLine)
//console.log (MBTA.OrangeLine)

