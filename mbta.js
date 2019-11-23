let subwayLines = {

Red: ['South Station' , 'Park Street' , 'Kendall' , 'Central' , 'Harvard' , 'Porter' , 'Davis' , 'Alewife'],
Green: ['Government Center', 'Park Street' , 'Boylston' , 'Arlington' , 'Copley' , 'Hynes' , 'Kenmore'],
Orange: ['North Station' , 'Haymarket' , 'Park Street' , 'State' , 'Downtown Crossing' , 'Chinatown' , 'Back Bay' , 'Forest Hills']

} // end of subwayLines object

function stopsBetweenStations(startLine, startStation, endLine, endStation){
        
    let stops = 0
    let startIndex = subwayLines[startLine].indexOf(startStation)
    let endIndex = subwayLines[endLine].indexOf(endStation)

        if (startLine == endLine){ // same Lines for the start and end 
            stops = Math.abs(endIndex - startIndex)
            console.log(`Rider boards the train a ${startLine} Line and ${startStation}.`)

            if (startIndex < endIndex){ // I'm forwarding
            for (let i = startIndex+1 ; i <= endIndex ; i++){
                console.log(`Rider arrives at ${startLine} Line and ${subwayLines[startLine][i]}`)
                } // end looping
            } // end if

            else if (startIndex > endIndex) {// I'm downwarding
                for (let i = startIndex-1 ; i >= endIndex ; i--){
                console.log(`Rider arrives at ${startLine} Line and ${subwayLines[startLine][i]}`)
                } //enf looping
            } // end if
            
            console.log(`Rider exits the train at ${endLine} Line and ${endStation}`)
        }  

        else if (startLine == "Red" && endLine == "Green"){
            if (subwayLines["Red"].includes(startStation) && subwayLines["Green"].includes(endStation)){
            stops = diffLinesStops("Red", "Green")
            }
            console.log("Kindly please enter a correct station for Red and/or Green Lines")
            // Red startline and Green endLine
        } 
        else if (startLine == "Red" && endLine == "Orange"){
            if (subwayLines["Red"].includes(startStation) && subwayLines["Orange"].includes(endStation)){
            stops = diffLinesStops("Red", "Orange")
            }
            console.log("Kindly please enter a correct station for Red and/or Orange Lines")
            // Red startline and Orange endLine
        } 


        else if (startLine == "Green" && endLine == "Red"){
            if (subwayLines["Green"].includes(startStation) && subwayLines["Red"].includes(endStation)){
            stops = diffLinesStops("Green", "Red")
            }
            console.log("Kindly please enter a correct station for Green and/or Red Lines")
        // Green startline and Red endLine
        }

        else if (startLine == "Green" && endLine == "Orange"){
            if (subwayLines["Green"].includes(startStation) && subwayLines["Orange"].includes(endStation)){
            stops = diffLinesStops("Green", "Orange")
            }
            console.log("Kindly please enter a correct station for Green and/or Orange Lines")
            // Green startline and Orange endLine
        }


        else if (startLine == "Orange" && endLine == "Green"){
            if (subwayLines["Orange"].includes(startStation) && subwayLines["Green"].includes(endStation)){
            stops = diffLinesStops("Orange", "Green")
            }
            console.log("Kindly please enter a correct station for Orange and/or Green Lines")
        // Orange startline and Green endLine 
        }

        else if (startLine == "Orange" && endLine == "Red"){
            if (subwayLines["Orange"].includes(startStation) && subwayLines["Red"].includes(endStation)){
            stops = diffLinesStops("Orange", "Red")
            }
            console.log("Kindly please enter a correct station for Orange and/or Red Lines")
        // Orange startline and Red endLine
        }

        else {
            console.log("Kindly please enter a valid train line")
        }



        function diffLinesStops(firstLine, finishLine){ 
            
            let startLineParkStreetIndex = subwayLines[firstLine].indexOf("Park Street") 
            let stopsOfFirstLine = Math.abs(startLineParkStreetIndex - startIndex)
            let parkStreetOfEndLine = subwayLines[endLine].indexOf("Park Street")
            let stopsOfEndLine = Math.abs(parkStreetOfEndLine - endIndex)
            let finalStopsOfLines = stopsOfFirstLine + stopsOfEndLine

                console.log(`Riders boards at ${firstLine} Line and ${startStation}.`)
                
                    if (startIndex < startLineParkStreetIndex){ // I'm forwarding
                    for (let i = startIndex+1 ; i <= startLineParkStreetIndex ; i++){
                        console.log(`Rider arrives at ${firstLine} Line and ${subwayLines[firstLine][i]}`)
                           
                    } // end looping
                    console.log(`Rider transfers from ${firstLine} to ${finishLine} at ${subwayLines[firstLine][startLineParkStreetIndex]}`)
                    } // end if

                    else if (startIndex > startLineParkStreetIndex) {// I'm downwarding
                        for (let i = startIndex-1 ; i >= startLineParkStreetIndex ; i--){
                            console.log(`Rider arrives at ${firstLine} Line and ${subwayLines[firstLine][i]}`)
                        } //end looping
                    console.log(`Rider transfers from ${firstLine} to ${finishLine} at ${subwayLines[firstLine][startLineParkStreetIndex]}`)
                    } // end if
                    
                    if (startLineParkStreetIndex < endIndex){ // I'm forwarding
                    for (let i = startLineParkStreetIndex+1 ; i <= endIndex ; i++){
                        console.log(`Rider arrives at ${finishLine} Line and ${subwayLines[finishLine][i]}`)
                           
                        } // end looping
                    } // end if

                    else if (startLineParkStreetIndex > endIndex) {// I'm downwarding
                        for (let i = startLineParkStreetIndex-1 ; i >= endIndex ; i--){
                            console.log(`Rider arrives at ${finishLine} Line and ${subwayLines[firstLine][i]}`)
                        } //end looping
                    } // end if

                    console.log(`Rider exits the train at ${finishLine} Line and ${endStation}`)
            return finalStopsOfLines
        } // end diffLinesStops func

return stops
} // end of stopsBetweenStations func


//console.log(`${stopsBetweenStations("Red","Porter","Orange","Alhamra")} stops`)

console.log(`${stopsBetweenStations("Red","South Station","Green","Kenmore")} stops`)

//console.log(`${stopsBetweenStations("Red","South Station","Red","Alewife")} stops`)