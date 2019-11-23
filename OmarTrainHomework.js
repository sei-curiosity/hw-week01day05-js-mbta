const stops =  ["South Station",'Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife', 'Government Cente','Boylston','Arlington','Copley','Hynes','Kenmore','North Station','Haymarket','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills'];

let red = {
    station0:stops[0],
    station1:stops[1],
    station2:stops[2],
    station3:stops[3],
    station4:stops[4],
    station5:stops[5],
    station6:stops[6] ,
    station7:stops[7],

}

let green = {

    station0:stops[8],
    station1:stops[1],
    station2:stops[9],
    station3:stops[10],
    station4:stops[11],
    station5:stops[12],
    station6:stops[13]
}

let orange = {
    station0:stops[14],
    station1:stops[15],
    station2:stops[1],
    station3:stops[16], 
    station4:stops[17],
    station5:stops[18],
    station6:stops[19],
}

function mbta(startline,startStation,endLine,endStation) {
let count = 0 
if (startline == 'red' ) { 
           if ( startStation== red.station0 ) {
            count=0
        } else if (startStation == red.station1) {
             count=1
        } else  if (startStation == red.station2) {
             count=2
        } else if ( startStation == red.station3){
              count=3
        } else          
             if (startStation == red.station4 ) {
              count=4
        } else if (startStation == red.station5) {
               count=5
        } else  if (startStation == red.station6) {
                count=6
        } else  if (startStation == red.station7){
                 count = 7
        }
    }
else if (startline == 'green' ){ 

    if ( startStation== green.station0 ) {
              count=0
     } else if (startStation == green.station1) {
                count=1
     } else  if (startStation == green.station2) {
                 count=2
     } else if ( startStation == green.station3){
                  count=3
     } else          
          if (startStation == green.station4 ) {
                   count=4
     } else if (startStation == green.station5) {
                    count=5
     } else  if (startStation == green.station6) {
                     count=6
     }

else if (startline== 'orange'){

    if ( startStation== orange.station0 ) {
                     count=0
     } else if (startStation == orange.station1) {
                       count=1
     } else  if (startStation == orange.station2) {
                        count=2
     } else if ( startStation == orange.station3){
                         count=3
     } else          
          if (startStation == orange.station4 ) {
                          count=4
     } else if (startStation == orange.station5) {
                           count=5
     } else  if (startStation == orange.station6) {
                            count=6
     }

}






}
    

if (endLine=='red') {

            if ( endStation== startStation) {
                            count=0
     } else if (endStation == red.station1) {
                              count=1
     } else  if (endStation == red.station2) {
                               count=2
     } else if ( endStation == red.station3){
                                count=3
     } else          
          if (endStation == red.station4 ) {
                                 count=4
     } else if (endStation == red.station5) {
                                  count=5
     } else  if (endStation == red.station6) {
                                   count=6
     } else  if (endStation == red.station7 ){
                                    count = 7

     }
}   
else if (endLine == 'green') { 

    if ( endStation== green.station0) {
                                    count=0
     } else if (endStation == green.station1) {
                                      count=1
     } else  if (endStation == green.station2) {
                                       count=2
     } else if ( endStation == green.station3){
                                        count=3
     } else          
          if (endStation == green.station4 ) {
                                         count=4
     } else if (endStation == green.station5) {
                                          count=5
     } else  if (endStation == green.station6) {
                                           count=6 }
}
else if (endLine == 'orange'){ 

    if ( endStation== orange.station0) {
                                           count=0
     } else if (endtStation == orange.station1) {
                                             count=1
     } else  if (endStation == orange.station2) {
      count=2
     } else if ( endStation == orange.station3){
        count=3
     } else          
          if (endStation == orange.station4 ) {
        count=4
     } else if (endStation == orange.station5) {
      count=5
     } else  if (endStation == orange.station6) {
       count=6 }

}

return count; 

}  


console.log(mbta('red', red.station0,'green',green.station6));

