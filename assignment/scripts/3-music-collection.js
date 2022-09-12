console.log('***** Music Collection *****')
let collection = []; 

 
function addToCollection(title,artist,yearPublished) {
collection = [{title,artist,yearPublished}];
 return collection[0];
}

console.log(addToCollection("Cool","Danny Devito",2004));
console.log(collection[0]) ;