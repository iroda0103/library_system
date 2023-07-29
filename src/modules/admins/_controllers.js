const express = require("express");
const Admin = require("./Admin");
const httpValidator = require("../../shared/http-validator");
const { postLoginAdminSchema, postAdminSchema, getAdminSchema, showAdminSchema, patchAdminSchema, patchMeSchema, deleteAdminSchema } = require("./_schemas");
const loginAdmin = require("./login-admin");
const addAdmin = require("./add-admin");
const listAdmin = require("./list-admin");
const showAdmin = require("./show-admin");
const editAdmin = require("./edit-admin");
const removeAdmin = require("./remove-admin");


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const postAdmin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAdminSchema);
    const result = await addAdmin(req.body);

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
const getAdmins = async (req, res, next) => {
  try {
    httpValidator({query:req.query},getAdminSchema)
    const result = await listAdmin(req.query);

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
const postLoginAdmin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginAdminSchema);
   
    const result = await loginAdmin(req.body);

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
const getAdmin = async (req, res, next) => {
  try {
    httpValidator({params:req.params},showAdminSchema)
    
    const result = await showAdmin(req.params.id);

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
const patchAdmin = async (req, res, next) => {
  try {
    httpValidator({params:req.params,body:req.body},patchAdminSchema)
    
    const result = await editAdmin({id:req.params.id,...req.body});

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
const patchMe = async (req, res, next) => {
  try {
    httpValidator({body:req.body},patchMeSchema)
    
    const result = await editAdmin({id:req.user.id,...req.body});

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
const deleteAdmin = async (req, res, next) => {
  try {
    console.log('ddddd',req.params);
    httpValidator({params:req.params},deleteAdminSchema)
    
    const result = await removeAdmin(req.params.id);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  postAdmin,
  getAdmin,
  postLoginAdmin,
  showAdmin,
  getAdmins,
  patchAdmin,
  patchMe,
  deleteAdmin
};
