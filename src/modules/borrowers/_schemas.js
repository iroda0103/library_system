const Joi = require("joi");

exports.postBorrowerSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
  }),
};

exports.getBorrowerSchema = {
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
      by: Joi.string().valid("full_name", "phone"),
      order: Joi.string().valid("asc", "desc"),
    }),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
    }),
  }),
};

exports.showBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchBorrowerSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    address: Joi.string(),
    phone: Joi.number(),
  }),
};

exports.deleteBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
