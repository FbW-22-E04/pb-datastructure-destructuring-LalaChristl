// #### 1. Array Destructuring
let a, b, c;
[a, b, c] = ["banana", "cucumber", ["bread", "cakes", "pizza"]];

console.log("Q1.", a, b, ...c);

console.log("----------------------------");

// #### 2.Object Destructuring

const halloween = {
    daniel: "wizard",
    lala: "hobo",
    izabela: "princess", 
}

console.log("Q2.", Object.values(halloween));

console.log("----------------------------");

// #### 3. Parameters: Object Destructuring 

const band = {
    musician: "Prince",
    greatestHit: "1999",
    nationality: "American",
    genre: "pop",
}

function bandData() {
   return Object.entries(band);
}
console.log(`${band.musician} is a ${band.nationality} singer from America and their greatest hit is ${band.greatestHit}`);

bandData()

