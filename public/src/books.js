function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const booksOutArray = books.filter((book) => book.borrows[0].returned === false);
  const booksReturnedArray = books.filter((book) => book.borrows[0].returned === true);
  return [booksOutArray, booksReturnedArray];
}

function getBorrowersForBook(book, accounts) {
  const borrowersAccounts = book.borrows.reduce((result, borrower) => {
    const borrowerAccount = accounts.find((account) => account.id === borrower.id);
    borrowerAccount.returned = borrower.returned;

    result.push(borrowerAccount)
    return result; 
  }, []);
  return borrowersAccounts.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
