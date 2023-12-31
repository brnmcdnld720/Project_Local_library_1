function findAccountById(accounts, id) {
  let objAccountById;
  let indexAccountById;

  objAccountById = accounts.find((account) => account.id === id);
  indexAccountById = accounts.findIndex((account) => account.id === id);

  return objAccountById;
}

function sortAccountsByLastName(accounts) {
  let sortedAcountsByLastName = accounts;

  sortedAcountsByLastName.sort((lastNameA, lastNameB) => {
    return lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1;
  });
  return sortedAcountsByLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let timesBorrowed;
  const borrowersIdNumber = account.id;

  const arrayOfBooksWithGivenId = books.reduce((result, book) => {
    
    const borrowerIds = book.borrows.reduce((resultId, borrow) => {
  
      resultId.push(borrow.id)
      return resultId
    } ,[]);
    result.push(borrowerIds.filter((id) => id === borrowersIdNumber))
    return result;
  }, [])
  timesBorrowed = arrayOfBooksWithGivenId.reduce((result, id) => result + id.length, 0);
  return timesBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksNotReturned = books.filter((book) => book.borrows[0].returned === false);
  const booksCheckedOutByAccountId = booksNotReturned.filter((book) => book.borrows[0].id === account.id )
  booksCheckedOutByAccountId.forEach((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    book.author = author;
  });
  return booksCheckedOutByAccountId;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};