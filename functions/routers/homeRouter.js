const express = require('express');
const router = express.Router();

router.get('/', (require,response, next)=>{
    response.render('homePage');
});

module.exports = router;