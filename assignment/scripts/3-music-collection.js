console.log('***** Music Collection *****')
let collection = []; 
console.log(collection);
 
  
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

 

  

function showCollection(arr) {
    let text;
    console.log("Items in array:",arr.length)
    for(let x of arr) {
         text = x;
         console.log('"'+x.title+'"' + ' by ' + x.artist + ', published in '+ x.yearPublished);
         for(let j of arr) {
            text = j;
         }
    }
 
};
 showCollection(collection);

 // Now I'm going to create a new array and input it's value into showCollection() to test it.

 const rap = [
    {
        title: "Mansion",
        artist: "NF",
        yearPublished: 2015
    },
    {
        title: "The Chronic",
        artist: "Dr. Dre",
        yearPublished: 1992
    },
    {
        title: "The Eminem Show",
        artist: "Eminem",
        yearPublished: 2002
    }
];

 showCollection(rap);
// It checks out!

let artist = [];
function findByArtist(artist) {
    let matching = [];
    text="";
     for(let x of collection) {
        console.log(x.artist);

          for(let j in collection) {
            console.log(collection.artist);

         }
       
   }
    return artistCheck;
}

console.log(findByArtist("The Beatles"));

 
