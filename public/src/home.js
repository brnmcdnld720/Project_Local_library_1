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
 return topFiveSorted(genresArray);
}

function getMostPopularBooks(books) {
  const bookNumberCheckedOut = books.reduce((result, book) => {
    result.push({name: book.title, count: book.borrows.length});
    return result
  }, []);
  return topFiveSorted(bookNumberCheckedOut);
}

function getMostPopularAuthors(books, authors) {
  let mostPopularAuthorsArray = makeArrayNameAndCountObj(authors);
  books.forEach((book) => {
    const authorId = book.authorId
    const matchedAuthor = mostPopularAuthorsArray.find((author) => author.id === authorId)
    matchedAuthor.count += book.borrows.length;
  });
  mostPopularAuthorsArray = mostPopularAuthorsArray.map((author) =>  {
   return  {name: author.name, count: author.count}
  });
  return topFiveSorted(mostPopularAuthorsArray);
}

function makeArrayNameAndCountObj (array){
  const arrayFormatted = array.map((arrayItem) => {
    return {id: arrayItem.id, name: `${arrayItem.name.first} ${arrayItem.name.last}`, count: 0}});
  return arrayFormatted;
}

function topFiveSorted(array){
  array.sort((countA, countB) => countA.count > countB.count ? -1 : 1)
  return array.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
