function getTotalBooksCount(books) {
  return books.reduce((total, ___) => total + 1, 0)
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((total, ___) => total + 1, 0)
}

function getBooksBorrowedCount(books) {
  const booksBorrowed = books.filter((book) => book.borrows[0].returned === false);
  return booksBorrowed.reduce((total, ___) => total + 1, 0)
}

function getMostCommonGenres(books) {
 const genresArray = [];

 books.forEach(book => {
  const genreIndex = genresArray.findIndex((genre) => genre.name === book.genre);

  (genreIndex !== -1)? genresArray[genreIndex].count++ : genresArray.push({name: book.genre, count: 1});

 });
 genresArray.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1);
 return genresArray.slice(0, 5);
}

function getMostPopularBooks(books) {
  const bookNumberCheckedOut = books.reduce((result, book) => {
    result.push({name: book.title, count: book.borrows.length});
    return result
  }, []);
  bookNumberCheckedOut.sort((numCheckA, numCheckB) => numCheckA.count > numCheckB.count ? -1 : 1);
  return bookNumberCheckedOut.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorNumberCheckedOut = []
  books.forEach((book) => {
    const authorId = book.authorId
    const authorName = `${authors[authorId].name.first} ${authors[authorId].name.last}`
    const authorIndex = authorNumberCheckedOut.findIndex((authorNum) => authorNum.name === authorName);
    if (authorIndex === -1 ) {
      authorNumberCheckedOut.push({name: authorName, count: book.borrows.length})
     }
    else {
      authorNumberCheckedOut[authorIndex].count += book.borrows.length;
    }
  });
  authorNumberCheckedOut.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1)
  return authorNumberCheckedOut.slice(0, 5);
}

// console.log(getMostPopularAuthors(authors));
console.log(authors[8]);
console.log(books[0]);

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
