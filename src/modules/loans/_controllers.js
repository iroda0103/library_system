const express = require("express");
const httpValidator = require("../../shared/http-validator");
const { postLoanSchema, getLoanSchema, showLoanSchema, deleteLoanSchema } = require("./_schemas");
const addLoan = require("./add-loan");
const listLoan = require("./list-Loan");
const showLoan = require("./show-loan");
const returnLoan = require("./return-loan");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postLoan = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoanSchema);
    const result = await addLoan(req.body);
    // console.log({...req.body,out_date:Date.now()});
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
const getLoans = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getLoanSchema);
    const result = await listLoan(req.query);

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
const getLoan = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showLoanSchema);

    const result = await showLoan(req.params.id);

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
const returned = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteLoanSchema);

    const result = await returnLoan(req.params.id);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



module.exports = {
  postLoan,
  getLoans,
  getLoan,
  returned
};
