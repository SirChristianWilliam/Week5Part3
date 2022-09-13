console.log('***** Music Collection *****')
let collection = []; 
console.log(collection);
  
function addToCollection(title,artist,yearPublished) {
    let obj = {title,artist,yearPublished};
  collection.push(obj);
   return obj; 
};

console.log(addToCollection("Egg","Danny Devito",2004)); 
console.log(addToCollection("Thriller","Michael Jackson",1982));
console.log(addToCollection("Abbey Road","The Beatles",1969));
console.log(addToCollection("Bad","Michael Jackson",1987));
console.log(addToCollection("Let It Be","The Beatles",1970));
console.log(addToCollection("Good Times","The Beatles",1970));

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
    };
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
console.log("-----break-----")

   function findByArtist(artist) {
    let matching = [];
       for(let x of collection) {
         if(artist == x.artist) {
            console.log(x);
            matching.push(x);
           }  
   };
   return  matching;
 };

console.log(findByArtist("The Beatles"));
console.log(findByArtist("The Wiggles"));
console.log(findByArtist("NF"));
console.log(findByArtist("Danny Devito"));


// So, I'm going to ask you about this question in class this week if we have time.
// If not, I'll ask here. So, the function works exactly as it should, for all
// intents and purposes. However, when I add an "else" onto my if statement, it does
// not return as I would intend. Because in my collections array I have one more object
// at the end, the for loop reads that as the last value and no matter what will
// return and empty array []. For example, what if I would like to return the contents
// of the if statement (matching.push(x)), and if that statement is not true for all
// of the array's contents, then I would like to return a string "false". 
// I could not find a way to accomplish this and I've spent probably around 5 hours
// or more on it now. I have a working function, so I will be moving on for now. Thanks.

console.log("-----stretch goals below-----")

function search(search) {
    let searchedArray = [];
    if(!search) {
        searchedArray == collection;
        console.log("Input required, returning collection")
        return collection;
    };
    for(let x of collection) {
       if(search.artist === x.artist && search.year === x.yearPublished) {
        searchedArray.push(x);
         }       
};
return searchedArray;  
};

console.log(search({artist:"The Beatles",year:1970}));
console.log(search());
console.log(search(""));
console.log(search(null));

console.log(search(undefined));

console.log(search({artist:"Scooby Doo",year:1995}));