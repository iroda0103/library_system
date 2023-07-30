const Joi = require("joi");

exports.postLoanSchema = {
  body: Joi.object({
    book: Joi.string().required(),
    borrower: Joi.string().required(),
    admin:Joi.string().required(),
    due_date:Joi.date().required(),
  }),
};

exports.getLoanSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: Joi.object({
      offset: Joi.number().integer(),
      limit: Joi.number().integer().when("offset", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
    }),
    sort: Joi.object({
      by: Joi.string().valid("out_date","due_date"),
      order: Joi.string().valid("asc", "desc"),
    }),
    filters: Joi.object({
      book: Joi.string(),
      admin:Joi.string()
    }),
  }),
};

exports.showLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

// exports.patchLoanSchema = {
//   params: Joi.object({
//     id: Joi.string().required(),
//   })
// };

exports.deleteLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
