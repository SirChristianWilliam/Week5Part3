console.log('***** Music Collection *****')
let collection = []; 
console.log(collection);
  
function addToCollection(title,artist,yearPublished,tracks) {
        let obj = {title,artist,yearPublished,tracks}; //Create variable to store the values.
        collection.push(obj); // Adding those values to the empty array.
        return obj; // Returning the pushed array and displaying it.
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
    console.log("Items in array:",arr.length); //Displaying how many objects are in the collections array.
    for(let x of arr) { // Looping through the key of the array.
    console.log('"'+x.title+'"' + ' by ' + x.artist + ', published in '+ x.yearPublished + "-- " +
    "tracks: " ); // Displaying each object and its' values. 
    for(let i = 0; i < x.tracks.length; i++) {
    console.log(i+1 + ".",x.tracks[i]); //Since nested within the above loop, this loop
    // take the key values of the array, selects their array object "tracks", and iterates through
    // the array object's keys and values using i. 
    }
  };
};
 showCollection(collection);

 // Now I'm going to create a new array and input it's value into showCollection() to test it.

 const rap = [ //Create a array with objects to test my showCollection function.
    {
        title: "Mansion",
        artist: "NF",
        yearPublished: 2015,
        tracks:[{"Searching":"1:00"}] //Giving this array an array object for stretch problem.
    },
    {
        title: "The Chronic",
        artist: "Dr. Dre",
        yearPublished: 1992,
        tracks:[{"Doctors":"1:00"}] //Giving this array an array object for stretch problem.
    },
    {
        title: "The Eminem Show",
        artist: "Eminem",
        yearPublished: 2002,
        tracks:[{"Godzilla":"1:00"}] //Giving this array an array object for stretch problem.
    }
];
showCollection(rap); // It checks out!

console.log("-----break-----"); // (Just to make it easier to read). 

function findByArtist(artist) { //Now to find albums by using keywords.
    let matching = []; // Created new variable array, empty so I can push to it. 
    for(let x of collection) { // Iterating through the key of the array. 
      if(artist == x.artist) { // As it goes through the loop, this is asking, 
// is the artist ("The Beatles") the same value as the artist at the specific key
// that the loop is asking about. 
      console.log(x); // As it iterates, show each artist that meets the matching condition.
      matching.push(x); //As it iterates, push(add) the artists' object (key value pairs) onto
      // the empty array, so it is no longer empty.
    }  
  };
return matching;// If true, matching will return the console.log(x) & the push method.
// False will return the empty array. 
};

console.log(findByArtist("The Beatles")); //Will console.log the three matching values and return the 3 array objects.
console.log(findByArtist("The Wiggles")); //No match, will return empty array.
console.log(findByArtist("NF")); //No match, will return empty array.
console.log(findByArtist("Danny Devito")); //Only one match, will return the object with the artist name included.

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

//EDIT: Regarding this paragraph above, I think the stretch goals mostly answer it for me.
console.log("-----stretch goals below-----")

function search(search) {
let searchedArray = []; 
    for(let x = 0; x < collection.length; x++) { //Loop through the keys of the colleciton's length, essentially its indexes. 
    if(!search) { // If the search function is called but there is no input...
        console.log("Input required, returning collection"); //Text to let you know you didn't type in anything.
        return collection; // Returning the album collection since no items were found.
    } 
    else if (!search.trackName) { // If there is no trackName in the search function...
        if (search.artist === collection[x].artist && search.year === collection[x].yearPublished) { //Then checks to make sure artist and the year match.
            searchedArray.push(collection[x]); //If so, then push those ones that meet these requirements to the searchedArray.
           }
         } else if(collection[x].tracks[0].name === search.trackName[0].name && collection[x].tracks[0].duration === search.trackName[0].duration && search.artist === collection[x].artist && search.year === collection[x].yearPublished) {
//Above line says that the current object's track's name value equals the search input track name, and making sure it matches for the durations as well.
// Also making sure the artist name and year match. 
         searchedArray.push(collection[x].tracks); //If all the conditions above are true, push those track matches onto the array.
        }  
    };  
return searchedArray; //If the if/else statements evaluated and none of them are true, return an empty array. 
};

let trackName = [{name:"Tabbyroad",duration:"4:20"}]; // Creating a variable trackName as an array with one object with two key  value pairs.

console.log(search({artist:"Ray Charles",year:1957})); //Original input, will return empty array.
console.log(search({artist:"The Beatles",year:1970})); //Testing, will return two matches.
console.log(search()); //Testing, will return collection & console.log.
console.log(search("")); //Testing, will return collection & log.
console.log(search(null)); //Testing, will return collection & log.
console.log(search(undefined)); //Testing, will return collection & log. 
console.log(search({artist:"Scooby Doo",year:1995})); //Testing, will return an empty array as the match wasn't found but the search attemp was there.
console.log(search({artist:"Danny Devito",year:2004}));//Testing, will return the one match.

console.log("---adding tracks(stretch question)-----");
 
console.log(search({artist:"The Beatles",year:1969,trackName})); //Testing,will return the specific beatles album with the associated tracks.
console.log(search({artist:"Michael Jackson",year:1987,trackName})); //Testing, will return an empty array.
//NOTE: I do realize that I could have expanded on my if/else statements for conditions
//like this last console.log. It returns an empty array, even though there are the
// two key pair values. However, the instructions didn't say to (unless I missed it),
// so if you test the search function with the three values, where 1 
// of the three matches fail, it will return an empty array. 