const Joi = require("joi");

exports.postLoginAdminSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.postAdminSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.patchAdminSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

exports.patchMeSchema = {
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

exports.getAdminSchema = {
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
      by: Joi.string().valid("full_name", "username"),
      order: Joi.string().valid("asc", "desc"),
    }),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
      is_super: Joi.boolean(),
    }),
  }),
};

exports.showAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.deleteAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
