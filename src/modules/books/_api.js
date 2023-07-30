const express=require('express')
const isSuperAdmin = require('../../shared/auth/is-superAdmin')
const isLoggedIn = require('../../shared/auth/is-loggedin')
const { postBook, getBooks, getBook, patchBook, deleteBook } = require('./_controllers')

const router=express.Router()

router.get('/books',isLoggedIn,getBooks)
router.post('/books',isLoggedIn,postBook)
router.get('/books/:id',isLoggedIn,getBook)
router.patch('/books/:id',isLoggedIn,patchBook)
router.delete('/books/:id',isLoggedIn,deleteBook)


module.exports=router