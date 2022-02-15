// importing libraries and controllers
const express=require('express');
const router=express.Router();
const homeController= require('../controllers/homeController');

// this will to redirected to home controller acction
router.post('/isRuling',homeController.isRuling);

module.exports = router;