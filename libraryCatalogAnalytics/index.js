// Sample dataset for all exercises
const books = [
{
title: "The Hobbit",
author: "Tolkien",
year: 1937,
rating: 4.7,
genres: ["Fantasy"],
},
{
title: "1984",
author: "Orwell",
year: 1949,
rating: 4.8,
genres: ["Dystopian", "Political Fiction"],
},
{
title: "The Name of the Wind",
author: "Rothfuss",
year: 2007,
rating: 4.5,
genres: ["Fantasy", "Adventure"],
},
{
title: "Brave New World",
author: "Huxley",
year: 1932,
rating: 4.2,
genres: ["Dystopian"],
},
{
title: "Dune",
author: "Herbert",
year: 1965,
rating: 4.6,
genres: ["Science Fiction", "Adventure"],
},
{
title: "Fahrenheit 451",
author: "Bradbury",
year: 1953,
rating: 4.3,
genres: ["Dystopian", "Science Fiction"],
},
{
title: "The Road",
author: "McCarthy",
year: 2006,
rating: 4.0,
genres: ["Post-Apocalyptic"],
},
{
title: "To Kill a Mockingbird",
author: "Lee",
year: 1960,
rating: 4.9,
genres: ["Classic", "Coming-of-Age"],
},
];

//Return an array of titles for all books published on or after afterYear.
function getRecentBooks(books, afterYear){
    let titles = [];
    for( let i = 0; i < books.length; i++){
        if(books[i].year >= afterYear){
            titles.push(books[i].title);
        }
    }
    return titles;
}
//console.log(getRecentBooks(books , 1960));

// Calculate and return the average rating of the entire collection (rounded to two decimals).
function getAverageRating(books){
    let sum = 0;
    for( let i = 0; i < books.length; i++){
        sum+=books[i].rating;
    }
    return (sum / books.length).toFixed(2);
}
//console.log(getAverageRating(books));

// Produce and return a new array of book objects sorted by the given key in ascending order (or descending if asc is false).
function sortBooksBy(books, key, asc = true){
    let sortedBooks = [...books];//I used the spread operator to copy all elements into a new array
    sortedBooks.sort(function(a, b) {
        if (asc) {
            return a[key] - b[key];//smallest to biggest
        } else {//desc
            return b[key] - a[key];//biggest to smallest
        }

    });
    return sortedBooks; 
}   
//console.log(sortBooksBy(books, "year"));//sorted by the key : "year"

//Build and return an object mapping each genre to the number of books in that genre.
function countGenres(books){
    let genreBookCount = {};
    for(let i = 0; i < books.length ; i++){
        let bookGenres = books[i].genres;
        for(let j = 0; j < bookGenres.length; j++){
            let genre = bookGenres[j];
            if(genreBookCount[genre]){
                genreBookCount[genre]++;
            } else {
                genreBookCount[genre] = 1;           
            }            
        }
    }
    return genreBookCount;
}
//console.log(countGenres(books));

//Return an object whose keys are author names and whose values are arrays of their respective book objects
function groupByAuthor(books){
    let authors = {};
    for(let i = 0; i < books.length; i++){
        let currentAuthor = books[i].author;
        if(authors[currentAuthor]){
            authors[currentAuthor].push(books[i]);
        } else {
            authors[currentAuthor] = [books[i]];
        }
    }
    return authors;
}
//console.log(groupByAuthor(books));
//console.log(JSON.stringify(groupByAuthor(books), null, 2));

//Return true if any book’s rating is at least threshold; otherwise return false.
function hasHighlyRated(books, threshold){
    for(let i = 0; i < books.length; i++){ 
        if(books[i].rating >= threshold){
            return true; //i found a one and return true.. not continue
        }
    }
    return false;// i didnt find any book with at lease threshold!!
}
//console.log(hasHighlyRated(books, 4.5)); // rating 4.5: return true, rating 5: returns false

//Return true if every book’s year is strictly before year; otherwise return false.
function allBeforeYear(books, year){
    for(let i = 0; i < books.length; i++){ 
        if(books[i].year >= year){
            return false; //i found a one  that not before year!!
        }
    }
    return true;// i didnt find any book not before year! all the books is strictly before year:)
}
//console.log(allBeforeYear(books, 2010));// year 2010: returns true, year 1940: returns false

//Return the first book object whose title exactly matches title, or undefined if none match
function findByTitle(books, title){
    for(let i = 0; i < books.length; i++){ 
        if(books[i].title === title){
            return books[i];// return the first book with the name of title
        }
    }
    return undefined;// i didnt find any book with this title!
}
//console.log(findByTitle(books,"The Name of the Wind"));

//Tag Classics: Return a new array where each book object is extended with an isClassic boolean (true if year < 1950, else false).
function getTagClassics(books){
    let updatedBooks = [];
    for(let i = 0; i < books.length; i++){
        updatedBooks.push({
                ...books[i], isClassic: books[i].year < 1950
        })//copies the current book object and adds an isClassic property to the object book and stores the new object in updatedBooks
    }
    return updatedBooks;
}
//console.log(getTagClassics(books));

//Dystopian Titles List: Return an alphabetical array of titles for all books whose genres include "Dystopian".
function getDystopianTitles(books){
    let titles = [];
    for(let i = 0; i < books.length; i++){
        if(books[i].genres.includes("Dystopian")){
            titles.push(books[i].title);
        }
    }
    return titles.sort();//return the sorted titles array by alphabetical   
}
//console.log(getDystopianTitles(books));


//Keyword Search: Implement hasKeyword(books, keyword) to return true if any book’s title contains keyword (case-insensitive).
function hasKeyword(books, keyword){
    for(let i = 0; i < books.length; i++){
        if(books[i].title.toLowerCase().includes(keyword.toLowerCase())){
            return true;//I found book's title contains keyword (case-insensitive)
        }
    }
    return false //I didnt find book's title contains keyword (case-insensitive)
}
//console.log(hasKeyword(books, "WIND"));
