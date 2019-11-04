let array = [ 
    {"vid":"aaa", "san":12},
    {"vid":"aaa", "san":18},
    {"vid":"aaa", "san":2},
    {"vid":"bbb", "san":33},
    {"vid":"bbb", "san":44},
    {"vid":"aaa", "san":100}
]

let filtered = []

let keys2 = array
.map(e => e.vid)
.filter((item, index, a) => a.indexOf(item) === index)
.forEach(e => {
let x = array.filter(l => l.vid === e).map(v => v.san)
filtered.push({ vid: e, san: x })
})
console.log(filtered);
