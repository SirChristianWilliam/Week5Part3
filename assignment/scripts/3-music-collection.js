console.log('***** Music Collection *****')
let collection = []; 
 
  
function addToCollection(title,artist,yearPublished) {
    let obj = {title,artist,yearPublished};
  collection.push(obj);
   return obj; 
}

console.log(addToCollection("Egg","Danny Devito",2004)); 
console.log(addToCollection("Thriller","Michael Jackson",1982));
console.log(addToCollection("Abbey Road","The Beatles",1969));
console.log(addToCollection("Bad","Michael Jackson",1987));
console.log(addToCollection("Let It Be","The Beatles",1970));
console.log(addToCollection("Best Day Ever","Mac Miller",2011));
console.log(collection);

/*
let text = "";
for(let x of collection) {
     text= x;
     for(let j in collection[x]) {
        text += collection[x][j];
     }
     console.log(text);
}
 */

function showCollection() {

}

showCollection();

