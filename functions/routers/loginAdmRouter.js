const express = require('express');
const router = express.Router();

router.get('/', (require, response)=>{
    response.render('loginAdm');
});

module.exports = router;