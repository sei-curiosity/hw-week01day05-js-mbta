const subyWayLine = {



    subyWayLine1 : [ "Red","SouthStation", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
   
    subyWayLine2 : [ "Green","Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
   
    subyWayLine3 : [ "orange","North Station", "Haymarket", "Park Street", "", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],
   
   
   
   
   stopBetweenStations : function (startLine , startStation , endLine , endStation){
   
       var total = 0; 
       for(var i=0;i<this.subyWayLine1.length;i++) {                  
           if(this.subyWayLine1.length) { 
               continue; 
           } 
             
           total += Number(this.subyWayLine1.length); 
       } 
       return total;
    
   
    //this.stopBetweenStations.length
   
   //return this.stopBetweenStations
   
    
   
       
    }
   
   
   
   
   
   }
   
   
   
   
   console.log(subyWayLine.stopBetweenStations("Red" , "Alewife","Red", "Alewife"))
   console.log(subyWayLine.stopBetweenStations('Red', 'Alewife', 'Red', 'South Station'))
   console.log.apply(subyWayLine.stopBetweenStations('Red', 'South Station', 'Green', 'Kenmore'))