
Red =['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']
Green=['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore']
Orange=['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','lorest Hills']
stations=['Red','Green','Orange']
function stopsBetweenStations(line_1,station_1,line_2,satation_2){
    if(!(line_2 in stations)||!(line_1 in station)){
        console.log(`there is a mistake`)
    }
    console.log(`Rider boards the train a ${line_1} Line and ${station_1}.`)
    t = ''
    if (line_1==line_2){
        a = disanceToParkStreet(station_1,eval(line_1),satation_2)
        t=  `${a+1} stations`
    }
    else {a = disanceToParkStreet(station_1,eval(line_1))
    console.log(`Rider transfers from ${line_1} Line to ${line_2} Line at Park Street`)
    b = disanceToParkStreet(satation_2,eval(line_2))
    t =  `${a+b+1} stations`}
    console.log(`Rider exits the train at ${line_2} Line and ${satation_2}.`)
    console.log (t)
}


function disanceToParkStreet(station,line_1,arrivingstation ='Park Street'){
    m =departure= line_1.indexOf(station)
    n= destination=line_1.indexOf(arrivingstation)
    if(m == -1)
    console.lgo(`this station ${station} not in the Line ${line_1} `)
    iterate(m-n,line_1,station)
    return (Math.abs(m-n))
}

function iterate(i,line,station){
    if(i<0){
        i=Math.abs(i)
        if (i>2){
            i-=1
        }
        for(h=1;h<i;h++){
            console.log(`Rider arrives at  Line and ${line[line.indexOf(station)+h]}.`)  
        }
    }
    else{
        console.log(i)
        for(h=i-1;h>=0;h--){
            console.log(`Rider arrives Line and ${line[line.indexOf(station)-h]}.`)
            
        }
    }
}



//console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'))
//console.log(stopsBetweenStations('Red','South Station' , 'Red' ,'Alewife')) // 7 stops
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'))
//disanceToParkStreet(sation,line)
//console.log(makeArray('South Station','Park Street',Red)
console.log(stopsBetweenStations('Orange', 'North Station', 'Green', 'Government Center')) 