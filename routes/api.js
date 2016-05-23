'use strict';

var express = require('express');
var router = express.Router();

router.use('/facedetects', require('./facedetects'));
// router.use('/S3', require('./S3'));

module.exports = router;
