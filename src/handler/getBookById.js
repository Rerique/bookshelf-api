const books = require('../books');

const getBookById = (request, h) => {
  const { bookId } = request.params;

  const book = books.find((book) => book.id === bookId);
  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: { book },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = getBookById;
