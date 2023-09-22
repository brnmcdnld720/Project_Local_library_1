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
  const popBooksArray = [];

}

function getMostPopularAuthors(books, authors) {}

console.log(getMostCommonGenres(books));
console.log(books[0]);

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
