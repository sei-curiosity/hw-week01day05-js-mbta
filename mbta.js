let train = {

    red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

}

// console.log(train.red.indexOf('Davis'))

let red = train.red;
let green = train.green;
let orange = train.orange;

// let stops = 0;
// let stat = function (x) {
    
//       return train.red.indexOf(x)

// }

let tota = function( l1, s1 ,l2 , s2 ) {

    if (l1 == l2 && s1 == s2 ) {
        console.log('0 Stops') 
    }
    else {

        for (let i = 0; s1 <= s2 ; i++) {
            stops = stops + 1;
            console.log(stops)
        }
        // console.log(stops)
   
    }   

}

tota ( red , train.red.indexOf('South Station') , green , train.red.indexOf('Davis') )
