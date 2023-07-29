const express = require("express");
const { ForbiddenError } = require("../errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const isSuperAdmin = (req, res, next) => {
  try {
    if (req.user.role != "super_admin") {
      throw new ForbiddenError("Forbiddin Error");
    }

    next();
  } catch (error) {
    next(new ForbiddenError(error.message));
  }
};

module.exports = isSuperAdmin;
