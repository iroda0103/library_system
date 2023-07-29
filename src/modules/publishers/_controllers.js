const express = require("express");
const listPublisher = require("./list-Publisher");
const httpValidator = require("../../shared/http-validator");
const addPublisher = require("./add-publisher");
const showPublisher = require("./show-publisher");
const editPublisher = require("./edit-publisher");
const removePublisher = require("./remove-publisher");
const {
  postPublisherSchema,
  getPublisherSchema,
  showPublisherSchema,
  patchPublisherSchema,
  deletePublisherSchema,
} = require("./_schemas");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postPublisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postPublisherSchema);
    const result = await addPublisher(req.body);

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
const getPublishers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getPublisherSchema);
    const result = await listPublisher(req.query);

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
const getPublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showPublisherSchema);

    const result = await showPublisher(req.params.id);

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
const patchPublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchPublisherSchema);

    const result = await editPublisher({ id: req.params.id, ...req.body });

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
const deletePublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deletePublisherSchema);

    const result = await removePublisher(req.params.id);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postPublisher,
  getPublishers,
  getPublisher,
  patchPublisher,
  deletePublisher,
};
