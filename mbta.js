let Subway = {
    red:[],
    green:[],
    orange:[]

}
let redStations=['South Station', 'Park Street','Kendall',
'Central','Harvard', 'Porter', 'Davis', 'Alewife']

let greenStations=['Government Center','Park Street','Boylston','Arlington',' Copley',
    'Hynes','Kenmore']

let orangeStations=['North Station','Haymarket','Park Street','State',
'Downtown Crossing','Chinatown','Back Bay','Forest Hills']

let accLineR = 'red'
console.log(Subway[accLineR])
function addStations  (arr,objN,key) {
    let lineName=accLineR
//     let 
// for( key in Subway ){
//       console.log(`here `+ Subway.key(arr))
 
//  }
///key=Subway.key
 
    for (let i=0 ;i<arr.length;i++){
        lineName.push(arr[i])
        console.log(` ${lineName[i]}`)
      }
    
}

function stopsBetweenStations(startLine,startStation,endStation,endLine) {

   let firstIdx = Subway.red.indexOf(startStation)
 //  console.log(firstIdx)
   let SecondIdx = Subway.red.indexOf(endStation)
  // console.log(SecondIdx)
   let numberOfStations =SecondIdx-firstIdx 
   return`number of stops is :${numberOfStations} stations `

     //  let arr = Subway.red.indexOf(startStation)
//     while (idx >=0) {
//       arr.push(idx);
//       idx = arr.indexOf(startStation, idx + 1);
//     }
// return idx
    //
   // let idx=Subway.red.indexOf(startStation)
// let arr = []
//    for (let i = 0; i<Subway.red.length;i++){
//     if(Subway.red.indexOf(startStation) >=0 ){
//         arr = Subway.red[i]
//        console.log(arr)
//         }   
// }
   // return`number of  "A" are : ${arr}` 
    
}
//var Subway1 = new Object();

addStations(redStations,Subway,accLineR)
// addStations(greenStations)
// addStations(orangeStations)
console.log(stopsBetweenStations('Kendall','Porter'))