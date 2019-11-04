let unfiltered = [
      ["aaa",12],
      ["aaa",32],
      ["aaa",132],
      ["vsa",322],
      ["vsa",3332],
      ["vsa",342],
      ["ggg",122],
      ["gg",332132],
      ["ggg",2144],
      ["bbb",2323]
]; 

let filtered = {};
unfiltered.forEach(function(item){
    filtered[item[0]] = filtered[item[0]]||[];
    filtered[item[0]].push(item[1]);

    
});
console.log(filtered);
/*
for( let i = 0; i < unfiltered.length; i++ ){
    for(let j = 0; j < unfiltered[i].length; j++){
         console.log(unfiltered[i][j]);
        }
}







/*unfiltered.forEach(function(key){


})

/*const grouped = groupBy(unfiltered, filter => filter.unfiltered[0]);
console.log(grouped.get("aaa"));

/*unfiltered.forEach(function(words){
    if(words === "aaa")
    console.log(words.unfiltered[1]);
})

/*unfiltered.forEach(function(slova){
    if(unfiltered[0] === "aaa"){
    console.log(slova.unfiltered[1]);
     }
});

*/

    /*let result = [];
    result = unfiltered.filter(word => word === "aaa");
    console.log(result);
    */

    /*let keys = Object.keys(unfiltered);
    if keys === "aaa";
    console.log(unfiltered[1]);
*/
   /* unfiltered.forEach(function(slova){
        if(unfiltered[0] === "aaa"){
        console.log(slova.unfiltered);
         }
    });
    console.log("aaa");
*/

    //let aaa = unfiltered.filter()
/*
    let filtered = [];
    for (let i=0; i<unfiltered.length; i++){
        if( i = unfiltered("aaa"){
            console.log(i);
        })
    }
*/

   /* unfiltered.forEach(function(slovo){
        console.log(slovo."aaa");
    });
    
*/
  /*  "result":{
      "aaa":[12,32,132],
      "vsa":[322,3332,342],
      "ggg":[122,2144],
      "gg":[332132],
      "bbb":[2323]
    }
*/