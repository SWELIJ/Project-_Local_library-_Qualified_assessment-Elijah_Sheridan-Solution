function findAuthorById(authors, id) {     // 4/4 COMPLETE for books page
return authors.find((author) =>author.id === id ) // loop authors array and find first matching author ID
}

function findBookById(books, id) {
  return books.find((book) => book.id === id) // loop through books array and return first matching book ID
}

function partitionBooksByBorrowedStatus(books) { //if a book has every "returned" set to true in borrows array, push to returned[], else push to borrowed[]
let returned=[]
let borrowed =[]

for (const book in books){ //for every book, extract the borrows array
const {borrows}= books[book];
//TEST let bookReturned = (borrows.find((borrow)=> borrow.returned===true))
if (borrows.every((borrow)=> borrow.returned===true)){ //if every borrow in the borrows array has a 'returned' value of true,
  returned.push(book)//push to the returned array
} else {borrowed.push(book)}//if not, push to borrowed array
}
const separatedByStatus = [borrowed, returned] //create new array with status arrays
//console.log(separatedByStatus)
return separatedByStatus;
}

function getBorrowersForBook(book, accounts) {//find all accounts that borrowed a book and place them in an array with the book status. 
 //match ID for user and borrowsID, add their object to an array WITH the returned status
 const {borrows} = book; // extract borrows array
 let borrowedAccounts = [];
 
 

 //for every account...
  //const {id, ...rest} = account //deconstruct property for account

  for (const borrow in borrows){//loop borrows array and check if account ID is present
    if(borrowedAccounts.length <10){
    borrowedAccounts.push(accounts.find((account)=>borrows[borrow].id===account.id))//if it is, add this account to array // COMPLETE
    }
   }


   for (const user in borrowedAccounts){ // loop array of borrowed accounts 
    const {id, ...rest} = borrowedAccounts[user]; // deconstruct account properties
    for (const borrow in borrows){ // loop borrows for the book given
    //stopped here 12/13
    
    //if a matching ID exists, reassign Account values with the returned property for that ID
    if(borrowedAccounts[user].id===borrows[borrow].id){borrowedAccounts[user] = {id, returned: borrows[borrow].returned, ...rest}}
  }}
   //console.log(borrowedAccounts)


   
   


return borrowedAccounts;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
