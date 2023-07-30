const express = require("express");
const adminRouter = require("../modules/admins/_api");
const authorRouter = require("../modules/authors/_api");
const bookRouter = require("../modules/books/_api");
const borrowerRouter = require("../modules/borrowers/_api");
const publisherRouter = require("../modules/publishers/_api");
const loanRouter = require("../modules/loans/_api");

const router = express.Router();

router.use(
  adminRouter,
  authorRouter,
  bookRouter,
  borrowerRouter,
  publisherRouter,
  loanRouter
);

module.exports = router;
