const express = require("express");
const listBorrower = require("./list-borrower");
const httpValidator = require("../../shared/http-validator");
const addBorrower = require("./add-borrower");
const showBorrower = require("./show-borrower");
const editBorrower = require("./edit-borrower");
const removeBorrower = require("./remove-borrower");
const {
  postBorrowerSchema,
  getBorrowerSchema,
  showBorrowerSchema,
  patchBorrowerSchema,
  deleteBorrowerSchema,
} = require("./_schemas");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postBorrower = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postBorrowerSchema);
    const result = await addBorrower(req.body);

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
const getBorrowers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getBorrowerSchema);
    const result = await listBorrower(req.query);

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
const getBorrower = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showBorrowerSchema);

    const result = await showBorrower(req.params.id);

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
const patchBorrower = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchBorrowerSchema);

    const result = await editBorrower({ id: req.params.id, ...req.body });

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
const deleteBorrower = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteBorrowerSchema);

    const result = await removeBorrower(req.params.id);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postBorrower,
  getBorrowers,
  getBorrower,
  patchBorrower,
  deleteBorrower,
};
