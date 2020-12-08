const marks = [3,12,15,11];

/* 
forEach 
*/ 
// Méthode boucle for
for(let i=0; i<marks.length;i++) {
    console.log(marks[i]);
}

// forEach longue
marks.forEach(function(value) {
    console.log(value);
})

//forEach court
marks.forEach(value => console.log(value));


/*
map
*/
const marksPlusOne = marks.map(function(element) {
    return element+1;
})
console
// [3,12,15,11]
// 3 -> retourne 3+1 -> retourner 4  | marksPlusOne = [4]
// 12 -> retourne 12+1 -> retourner 13 | marksPlusOne= [4,13]
// 15 -> retourne 15+1 -> retourne 16 | marksPlusOne = [4,13,16]
// 11 -> retourne 11+1 -> retourne 12 | marksPlusOne = [4,13,16,12]