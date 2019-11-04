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
  ["bbb",2323],
  ["lll",567],
  ["gg", 98765],
]; 


  let filtered = {};
unfiltered.forEach(function(item){
    filtered[item[0]] = filtered[item[0]]||[];
    filtered[item[0]].push(item[1]);

    
});
console.log(filtered);

 /* let filtered = {
    '"aaa"': [unfiltered[0][1], unfiltered[1][1], unfiltered[2][1]],
    '"vsa"': [unfiltered[3][1], unfiltered[4][1], unfiltered[5][1]],
    '"ggg"': [unfiltered[6][1], unfiltered[8][1]],
    '"gg"': [unfiltered[7][1]],
    '"bbb"': [unfiltered[9][1]]
  };

  console.log(filtered);

  for(let i=0; i<unfiltered.length; i++){

  }*/

  /*unfiltered.forEach(function(slovo){
      console.log(slovo.aaa);
  });

*/