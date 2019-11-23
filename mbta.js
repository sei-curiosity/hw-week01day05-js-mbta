let map = {
    red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],
    sbs: function (startL, startSt, endL,endSt) {
        if (startL === endL) {
             return map.countSameLine(startL,startSt,endSt)
        }
        else {
             return map.countDiffLine(startL, startSt, endL, endSt)
        }
    },
    countSameLine: function (startL,startSt, endSt) {
            
        if (startL == 'red') {
                let sIndx = map.red.indexOf(startSt) //then get index of end the calculate distance
                let eIndx = map.red.indexOf(endSt)
                let final = map.calcuSame(sIndx,eIndx)
                return final 
            }
            if (startL == 'green') {
                let sIndx = map.green.indexOf(startSt) //then get index of end the calculate distance
                let eIndx = map.green.indexOf(endSt)
                let final = map.calcuSame(sIndx,eIndx)
                return final 
                }

            if (startL == 'orange') {
                let sIndx = map.orange.indexOf(startSt) //then get index of end the calculate distance
                let eIndx = map.orange.indexOf(endSt)
                let final = map.calcuSame(sIndx,eIndx)
                return final 
            }
        
},
calcuSame: function (sIndx,eIndx) {
    let result = 0
            if (sIndx <= eIndx) {
                for (i = 0; i <= eIndx; i++) {
                    result += 1
                }
                return result;
            }
            if (sIndx >= eIndx) {
                for (i = sIndx; i >= eIndx; i--) {
                    result += 1
                }
                return result;
            }
},
countDiffLine : function (startL, startSt, endL, endSt) {
          
    if (startL=='red'&& endL=='green') { 
               let sIndx= map.red.indexOf(startSt)
               let psIndex1= map.red.indexOf('Park Street')
               let psIndex2= map.green.indexOf('Park Street')  
               let eIndx= map.green.indexOf(endSt) 
       let final = map.calc(sIndx,psIndex1,psIndex2,eIndx)
       return final
           }
       
 if (startL=='red'&& endL=='orange') { 
           let sIndx= map.red.indexOf(startSt)
           let psIndex1= map.red.indexOf('Park Street')
           let psIndex2= map.orange.indexOf('Park Street')  
           let eIndx= map.orange.indexOf(endSt) 
           let final = map.calc(sIndx,psIndex1,psIndex2,eIndx)
           return final
       }


       if (startL=='orange'&& endL=='red') { 
           let sIndx= map.orange.indexOf(startSt)
           let psIndex1= map.orange.indexOf('Park Street')
           let psIndex2= map.red.indexOf('Park Street')  
           let eIndx= map.red.indexOf(endSt) 
           let final = map.calc(sIndx,psIndex1,psIndex2,eIndx)
           return final
       }
       if (startL=='orange'&& endL=='green') { 
           let sIndx= map.orange.indexOf(startSt)
           let psIndex1= map.orange.indexOf('Park Street')
           let psIndex2= map.green.indexOf('Park Street')  
           let eIndx= map.green.indexOf(endSt) 
           let final = map.calc(sIndx,psIndex1,psIndex2,eIndx)
           return final
       }


       if (startL=='green'&& endL=='red') { 
           let sIndx= map.green.indexOf(startSt)
           let psIndex1= map.green.indexOf('Park Street')
           let psIndex2= map.red.indexOf('Park Street')  
           let eIndx= map.red.indexOf(endSt) 
           let final = map.calc(sIndx,psIndex1,psIndex2,eIndx)
           return final
       }


       if (startL=='green'&& endL=='orange') { 
           let sIndx= map.green.indexOf(startSt)
           let psIndex1= map.green.indexOf('Park Street')
           let psIndex2= map.orange.indexOf('Park Street')  
           let eIndx= map.orange.indexOf(endSt) 
           let final = map.calc(sIndx,psIndex1,psIndex2,eIndx)
           return final
       }
   },
calc: function (sIndx,psIndex1,psIndex2,eIndx) {
    let result1 = 0
    if (sIndx < psIndex1) {
        for (i = 0; i <= psIndex1; i++) {
            result1 += 1
        }
        //console.log(result1);
    }
    else if (sIndx > psIndex1) {
        for (i = sIndx; i >= psIndex1; i--) {
            result1 += 1
        }
        //console.log(result1);
    }
    let result2 = 0
    if (psIndex2 < eIndx) {
        for (i = psIndex2; i < eIndx; i++) {
            result2 += 1
        }
        
        //console.log(result2);
    }
    else if (psIndex2 > eIndx) {
        for (i = psIndex2; i > eIndx; i--) {
            result2 += 1
        }  //console.log(result2);}
let final = result1+result2
return final 
}

}
console.log(`the number of stations you passed by is ${map.sbs('orange', 'Forest Hills', 'green', 'Kenmore')}`);
