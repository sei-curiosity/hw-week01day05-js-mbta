let MBTA = {

    Red : [ 'South Station','Park Street' , 'Kendall','Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    Green : ['Government Center','Park Street' , 'Boylston','Arlington', 'Copley', 'Hynes', 'Kenmore' ],
    Orange : ['North Station' ,'Haymarket' , 'Park Street','state', 'Downtown Crossing', 'Chinatown ', 'Back Bay', 'Forest Hills']}
    
    ////
    let stopsBetweenStations = function (sL, sS, eL, eS){ // checking whether the flow is in same line or different lines
    
    if (sL === eL){
    
    
        return sameLine(sL, sS, eL, eS)
    }
     else { return differentLines(sL, sS, eL, eS) }
    
    }
    
    ////
    
    let sameLine = function(sL, sS, eL, eS){                // Caculating No. of stops when flow is in the same line
    
    let startStationIndex= MBTA[sL].indexOf(sS)
    let endStationIndex= MBTA[eL].indexOf(eS)
    
    let diff = endStationIndex - startStationIndex
    let noOfStops= Math.abs(diff)
    return noOfStops
    }
    
    ///
    
    let differentLines = function (sL, sS, eL, eS){           // Caculating No. of stops when flow is in different lines
    
    let startStationIndex= MBTA[sL].indexOf(sS)
    let endStationIndex= MBTA[eL].indexOf(eS)
    let psIndexinStartLine=MBTA[sL].indexOf("Park Street")
    let psIndexinEndLine=MBTA[sL].indexOf("Park Street")
    
    let diffX= Math.abs(psIndexinStartLine - startStationIndex)
    let diffY = Math.abs(psIndexinEndLine - endStationIndex)
    
    let noOfStops = (diffX + diffY) 
    
    
    return noOfStops
    
    
    }
    
    
    console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')) 
    console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')) 
    console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')) 
    
    
    
    