const express = require("express");
const listBook = require("./list-book");
const httpValidator = require("../../shared/http-validator");
const addBook = require("./add-book");
const showBook = require("./show-book");
const editBook = require("./edit-book");
const removeBook = require("./remove-book");
const {
  postBookSchema,
  getBookSchema,
  showBookSchema,
  patchBookSchema,
  deleteBookSchema,
} = require("./_schemas");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postBook = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postBookSchema);
    const result = await addBook(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getBooks = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getBookSchema);
    const result = await listBook(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showBookSchema);

    const result = await showBook(req.params.id);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchBookSchema);

    const result = await editBook({ id: req.params.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteBookSchema);

    const result = await removeBook(req.params.id);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postBook,
  getBooks,
  getBook,
  patchBook,
  deleteBook,
};
