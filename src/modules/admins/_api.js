const express=require('express')
const { getAdmins, postAdmin, postLoginAdmin ,getAdmin, patchAdmin, patchMe, deleteAdmin} = require('./_controllers')
const isSuperAdmin = require('../../shared/auth/is-superAdmin')
const isLoggedIn = require('../../shared/auth/is-loggedin')

const router=express.Router()

router.get('/admins',isLoggedIn,getAdmins)
router.post('/admins',isLoggedIn,isSuperAdmin,postAdmin)
router.post('/login',postLoginAdmin)
router.get('/admins/:id',isLoggedIn,getAdmin)
router.patch('/admins/me',isLoggedIn,patchMe)
router.patch('/admins/:id',isLoggedIn,isSuperAdmin,patchAdmin)
router.delete('/admins/:id',isLoggedIn,isSuperAdmin,deleteAdmin)

module.exports=router