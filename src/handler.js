const addBook = require('./handler/addBook');
const getAllBooks = require('./handler/getAllBooks');
const getBookById = require('./handler/getBookById');
const editBookById = require('./handler/editBookById');
const deleteBookById = require('./handler/deleteBookById');

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  editBookById,
  deleteBookById,
};
