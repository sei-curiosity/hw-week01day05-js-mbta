let Red = ["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"]
//console.log(Red.length)
let Green = ["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"]
//console.log(Green)
let Orange = ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"]
//console.log(Orange)

let point = function(start,end){
    
    if (start == Red && end == Red){
    //console.log(Red.length)
        
    }
    
   return Red.indexOf(start)
   
}
let station = function(startSt,endSt){
    
    if (startSt == "Park Street" && endSt =="Alewife"){
    Red.indexOf(startSt)

    Red.indexOf(endSt )
        
    }
    
   return Red.indexOf(startSt)
   
}
 
  console.log(point(Red, Red))
  console.log(station("Park Street", "Alewife"))