let unfiltered = [ 
{"vid":"aaa", "san":12},
{"vid":"aaa", "san":18},
{"vid":"aaa", "san":2},
{"vid":"bbb", "san":33},
{"vid":"bbb", "san":44},
{"vid":"aaa", "san":100}
]


let filtered = unfiltered.map(function(item){
    return item.vid;

});

console.log(filtered);

/*let filtered2 = unfiltered.map(function(item2){
    return item2.san;
})
console.log(filtered2);
*/

let filtere = filtered.filter((value, index, self) => self.indexOf(value) === index);

console.log(filtere);







/*
var output = [];

array.forEach(function(item) {
  var existing = output.filter(function(v, i) {
    return v.name == item.name;
  });
  if (existing.length) {
    var existingIndex = output.indexOf(existing[0]);
    output[existingIndex].value = output[existingIndex].value.concat(item.value);
  } else {
    if (typeof item.value == 'string')
      item.value = [item.value];
    output.push(item);
  }
});

console.log(output);
*/
/*
function findObjectByKey(array, key, value) {
    for (let i = 0; i < unfiltered.length; i++) {
        if (unfiltered[i][key] === value) {
            return unfiltered[i];
        }
    }
    return null;
    console.log(unfiltered[i]);
}
*/
/*let filtered = {};
unfiltered.forEach(function(item){
    filtered[item[0]] = filtered[item[0]]||[];
    filtered[item[0]].push(item[1]);

    
});
console.log(filtered);
*/

/*let result = unfiltered.filter(function(obj, current){
    Object.keys(current).forEach(function(key){
        obj[key] = obj[key] || [];
        obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
        obj[key].push(current[key]);
        return key;
    });
    return obj;
    
})

console.log(result);
*/

/*for( let i = 0; i < unfiltered.length; i++ ){
    for(let j = 0; j < unfiltered[i].length; j++){
         console.log(unfiltered[i][j]);
        }
}
*/
/*let result = unfiltered.filter(function(obj, current){
    Object.keys(current).forEach(function(key){
        obj[key] = obj[key] || [];
        obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
        obj[key].push(current[key]);
    });
    return obj;
    
})

console.log(result);
*/

/*let result = unfiltered.shift(function(obj, current){
    Object.keys(current).forEach(function(key){
        obj[key] = obj[key] || [];
        obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
        obj[key].push(current[key]);
    });
    return obj;
    
})

console.log(result);

*/

/*let a = [];
unfiltered.forEach(function(obj){
    a.push(obj.);

})
console.log(a);*/
//console.log(Object.keys(unfiltered));



/*let keys = Object.keys(unfiltered);
for(let key of keys){
    let values = Object.values(unfiltered);
    let filtered = {};
    unfiltered.forEach(function(item){
        let filter =  [];
        item.forEach(function(item2){
            filter[item2[0]] = filter[item2[0]]||[];
            filter[item2[0]].push(item2[1]); 
        })
    
    
});
console.log(filter);
    
}
*/
/*
let keys = Object.keys(unfiltered);
console.log(keys);

let values = Object.values(unfiltered);
console.log(values);

let entries = Object.entries(unfiltered);
console.log(entries);
*/

//Object.keys(unfiltered).filter((key) => unfiltered[key]);


//console.log(Object.entries(unfiltered));

/*function a(item){
    for(let value of Object.values(item)){
        console.log(item);
    }

}
*/


/*
for(let i=0; i<unfiltered.length; i++){
    for(let key in unfiltered[i].values){
        console.log(unfiltered[i].values);
    }
}
*/
/*let filtered = [];
unfiltered.forEach(function(item){
    

})

*/
/*for( let i = 0; i < unfiltered.length; i++ ){
    for(let j = 0; j < unfiltered[i].length; j++){
         console.log(unfiltered[i][j]);
        }
}
console.log(unfiltered);
*/
/*let filtered = {};
unfiltered.forEach(function(item){
    filtered[item[0]] = filtered[item[0]]||[];
    filtered[item[0]].push(item[1]);

    
});
console.log(filtered);

*/

/*unfiltered.forEach(function(slovo){
    console.log(slovo."vid":"aaa","san";
});
*/

/*let filtered = {};
unfiltered.forEach(function(item){
    filtered[item[0] = filtered[item]||[];
    filtered[item[0]].push(item[1]);

    
});
console.log(filtered);
*/