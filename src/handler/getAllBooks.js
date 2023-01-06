const books = require('../books');

const getAllBooks = (request, h) => {
  const { name, reading, finished } = request.query;

  if (name !== undefined) {
    const filterName = books.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
    const response = h.response({
      status: 'success',
      data: {
        books: filterName.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  if (reading !== undefined) {
    const filterReading = books.filter(
      (book) => Number(book.reading) === Number(reading)
    );
    const response = h.response({
      status: 'success',
      data: {
        books: filterReading.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  if (finished !== undefined) {
    const filterFinished = books.filter(
      (book) => Number(book.finished) === Number(finished)
    );
    const response = h.response({
      status: 'success',
      data: {
        books: filterFinished.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooks;
