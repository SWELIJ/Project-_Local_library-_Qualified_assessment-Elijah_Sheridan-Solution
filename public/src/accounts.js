function findAccountById(accounts, id) {                                    //COMPLETE                      3/4 Complete Accounts PAge
return accounts.find((account) => account["id"] === id)
}

function sortAccountsByLastName(accounts) { //sort accounts by last name alphabetically
  //console.log(accounts[0].name.last.toLowerCase()) // returns "hawkins" to test 
 return accounts.sort((accountA, accountB) => {              //INCOMPLETE .. Doesnt sort accounts
   //accountA.name.last.toLowerCase() - accountB.name.last.toLowerCase() ? -1:1 
  const nameA = accountA.name.last.toLowerCase()
  const nameB = accountB.name.last.toLowerCase()
  let compare = 0;
  if(nameA>nameB) {compare=1}
  if(nameA<nameB) {compare=-1}

  return compare;
 })
}
  

function getTotalNumberOfBorrows(account, books) {
//loop through books array, every time a specific account ID is included under borrows array                            //COMPLETE
let borrowedCount = 0;
//console.log(account.id)
for (const book in books){ //for every object in books
const {borrows} = books[book] // deconstruct borrows array and then...
for (const borrow in borrows){ //loop borrows array check to see if ID property in array matches account id
  if (borrows[borrow].id === account.id){
    borrowedCount += 1;
  }
}
//console.log(borrows)
}
  return borrowedCount;
}

function getBooksPossessedByAccount(account, books, authors) {//find books a user currently possesses creating an array and add author info between authorID and borrows
let possessedBooks = [] 
let possessedBooksWithAuthor;                                                                                //COMPLETE
for (const book in books){ //for every object in books
   
  const {borrows} = books[book] // deconstruct borrows array and then...
  for (const borrow in borrows){ //loop borrows array and check to see if ID property in array matches account id and the book is not returned
    if (borrows[borrow].id === account.id && !borrows[borrow].returned){ 
      possessedBooks.push(books[book]) //add book to accounts possessed books
    }
  }
  }
  
 for (const book in possessedBooks){ // for every book in possession
  bookAuthor = authors.find((author) => author["id"] === possessedBooks[book].authorId)// loop authors and returns author for book in possession at current iteration if ID matches
  //console.log(bookAuthor) // check the author found
   possessedBooksWithAuthor = possessedBooks.map((book) => {  //for every book possessed
    const {id, title, genre, authorId, ...rest} = book        //deconstruct properties of book
    if(bookAuthor.id === authorId){return {id, title, genre, authorId, author: bookAuthor, ...rest};}//if bookauthor.id matches authorID at current book iteration, map author info
      
  })

 }
 // console.log(possessedBooksWithAuthor)
return possessedBooksWithAuthor
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
