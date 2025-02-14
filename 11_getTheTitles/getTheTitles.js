const getTheTitles = function (books) {
  let out = Object.values(books);
  let arr = [];
  out.forEach((book) => {
    arr.push(book.title);
  });
  return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
