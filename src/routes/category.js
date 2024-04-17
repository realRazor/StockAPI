"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const category = require('../controllers/category');
const {isStaff,isAdmin} = require('../middlewares/permissions');


// router.route('/')
//     .get(isStaff, category.read)
//     .post(isAdmin, category.create)

// router.route('/:id')
//     .get(isStaff, category.read)
//     .put(isAdmin, category.update)
//     .patch(isAdmin, category.update)
//     .delete(isAdmin, category.delete)

router.route('/(:id)?')
    .get(isStaff, category.read)
    .post(isAdmin, category.create)
    .put(isAdmin, category.update)
    .patch(isAdmin, category.update)
    .delete(isAdmin, category.delete)


/* ------------------------ */

module.exports = router