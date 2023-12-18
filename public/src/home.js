function getTotalBooksCount(books) { // COMPLETE            // 6/6 Complete Home Page
console.log(`Total Books: `)
  return books.length // Does this really need a comment?
}

function getTotalAccountsCount(accounts) { // COMPLETE

  return accounts.length //same as before
}

function getBooksBorrowedCount(books) { // COMPLETE
  let borrowedCount = 0;
for (const book in books){
if (books[book].borrows.some((borrow)=> borrow.returned != true )){
  borrowedCount +=1;
}
}
return borrowedCount
}




function getMostCommonGenres(books) {                       //INCOMPLETE.. doesnt sort
const genres = books.map((book) => {
return book.genre // gets all genres per book
})

const counts = genres.reduce((acc, genre) => {
   //if the genre doesnt exists at the accumulator iteration default to 0, create genre and set count to 1
  if(acc[genre]){
    acc[genre]++
  } else {
    acc[genre] = 1;
  }
  return acc;
}, {}); //creates one object with key pairs of the genre and times it occurs 
//console.log(counts)

const genreCount = Object.entries(counts).map(([name, count]) => ({ name, count })); //separates key pairs to make multiple objects with keys genre, count
 console.log(genreCount.sort((genreA, genreB)=> genreB.count - genreA.count).slice(0,5))
//return genreCount.sort((genreA, genreB)=> genreB.count - genreA.count).slice(0,5)
return sortByTopFive(genreCount)
}




function getMostPopularBooks(books) {// INCOMPLETE, just needs to be sorted 

  const unsorted = books.map((book) => {
    return {name: book.title, count: book.borrows.length} // gets all books and creates object with their borrow count and title in array..
    })
     //console.log( unsorted)


     
     return sortByTopFive(unsorted)
}


//loop over books with map, get author of book with find, return name and count combo TRY THIS LATER
function getMostPopularAuthors(books, authors) {    //INCOMPLETE // Not sure how to sort.. again

let allAuthorsBorrows = [] //Will hold the author's name and their total borrows in format: { name: "Cristina Buchanan", count: 112 }, this will then be used to sort

for (const author in authors){
  let authorObj = {name: `${authors[author].name.first} ${authors[author].name.last}`, count: 0} // creates author object
  allAuthorsBorrows.push(authorObj) // pushes author object to array 
  for (const book in books){ // loop entire books array for current author iteration
    const borrowCount = books[book].borrows.length // get borrow count for that book at current iteration
    if(books[book].authorId === authors[author].id){ // if the book at current book iteration is by the author at current author iteration, add borrows to count value
      authorObj.count += borrowCount
    }
    
   }
  }

return sortByTopFive(allAuthorsBorrows)
}

function sortByTopFive(array){ //will create helper function that...
  return array.sort((a, b)=> b.count - a.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
