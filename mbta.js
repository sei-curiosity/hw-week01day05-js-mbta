var train={
trainLine1:'red' ,
trainline2:'green',
trainline3:'orange',

};

   var red={
    subways:['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'],
     dis:function(x,y,subways){

         console.log(`train start  ${this.subways[0]} end station ${this.subways[3]}`);
        console.log(this.subways.indexOf(x)+this.subways.indexOf(y)-1);
    
        }
    
    
   

};


var green ={
    
    subways:['Government Center','Park Street','Boylston, Arlington',' Copley, Hynes',' Kenmore']
};

var orange= {
   subways:['North Station','Haymarket','Park Street','State,Downtown Crossing','Chinatown','Back Bay','Forest Hills']
}


console.log(red.dis('South Station','Central'))



