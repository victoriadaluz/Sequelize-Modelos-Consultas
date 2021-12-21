const express = require('express');
const router = express.Router();
const {
    list,
    neww,
    recommended,
    detail,
} = require('../controllers/moviesController');

router.get('/movies',list);
router.get('/movies/new',neww);
router.get('/movies/recommended',recommended);
router.get('/movies/detail/:id',detail);


module.exports = router;