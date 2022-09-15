console.log('***** Music Collection *****')
let collection = []; 
console.log(collection);
  
function addToCollection(title,artist,yearPublished,tracks) {
    let obj = {title,artist,yearPublished,tracks};
  collection.push(obj);
   return obj; 
};

console.log(addToCollection("Egg","Danny Devito",2004,[{name:"Eggtime",duration:"2:05"},{name:"Eggeroni",duration:"3:01"}])); 
console.log(addToCollection("Thriller","Michael Jackson",1982,[{name:"Crotchgrab",duration:"5:34"},{name:"Moonwalkin",duration:"3:50"},{name:"Jaywalkin",duration:"1:50"}]));
console.log(addToCollection("Abbey Road","The Beatles",1969,[{name:"Tabbyroad",duration:"4:20"},{name:"Crabbyroad",duration:"7:02"},{name:"Scabbyroad",duration:"1:30"}]));
console.log(addToCollection("Bad","Michael Jackson",1987,[{name:"Notgood",duration:"3:24"},{name:"Awful",duration:"2:22"},{name:"Worser",duration:":30"}]));
console.log(addToCollection("Let It Be","The Beatles",1970,[{name:"LeaveItAlone",duration:"4:01"},{name:"Walkaway",duration:"1:59"}]));
console.log(addToCollection("Good Times","The Beatles",1970,[{name:"OkayTimes",duration:"3:31"},{name:"NewYorkTimes",duration:"1:58"}]));
console.log(addToCollection("Best Day Ever","Mac Miller",2011,[{name:"OkayDay",duration:"4:55"},{name:"ActuallyBad",duration:"7:06"}]));
console.log(collection);

function showCollection(arr) {
     console.log("Items in array:",arr.length)
    for(let x of arr) {
          console.log('"'+x.title+'"' + ' by ' + x.artist + ', published in '+ x.yearPublished + "-- " +
         "tracks: " );
         for(let i = 0; i < x.tracks.length; i++) {
            console.log(i+1 + ".",x.tracks[i]);
         }
        
    
    };
};
 showCollection(collection);

 // Now I'm going to create a new array and input it's value into showCollection() to test it.

 const rap = [
    {
        title: "Mansion",
        artist: "NF",
        yearPublished: 2015,
        tracks:[{"Searching":"1:00"}]
    },
    {
        title: "The Chronic",
        artist: "Dr. Dre",
        yearPublished: 1992,
        tracks:[{"Doctors":"1:00"}]

    },
    {
        title: "The Eminem Show",
        artist: "Eminem",
        yearPublished: 2002,
        tracks:[{"Godzilla":"1:00"}]

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
    for(let x = 0; x < collection.length; x++) {
        
    if(!search) {
        searchedArray == collection;
        console.log("Input required, returning collection");
        return collection;
    }  else if (!search.trackName) {
        if (search.artist === collection[x].artist && search.year === collection[x].yearPublished)  {
            searchedArray.push(collection[x]);
     }

    } else if(collection[x].tracks[0].name === search.trackName[0].name && collection[x].tracks[0].duration === search.trackName[0].duration && search.artist === collection[x].artist && search.year === collection[x].yearPublished) {
         searchedArray.push(collection[x].tracks);
     
    }  
           
   
        
        }
        
return searchedArray;  
};



let trackName = [{name:"Tabbyroad",duration:"4:20"}];

console.log(search({artist:"Ray Charles",year:1957})); //Original input
console.log(search({artist:"The Beatles",year:1970})); //Testing
console.log(search()); //Testing
console.log(search("")); //Testing
console.log(search(null)); //Testing
console.log(search(undefined)); //Testing
console.log(search({artist:"Scooby Doo",year:1995})); //Testing

console.log(search({artist:"Danny Devito",year:2004}));

console.log("---adding tracks(stretch question)-----");
 
 console.log(search({artist:"The Beatles",year:1969,trackName})); //Testing
console.log(search({artist:"Michael Jackson",year:1987,trackName})); //Testing

 
 