const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const {gettoken,
    getBankdetails, getBranchdetails
} = require('../controllers/BankController');
const auth =require('../middleware/auth.js')
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.get('/getbankdetails',auth, getBankdetails);
router.get('/getbranchdetails',auth, getBranchdetails);
router.get('/gettoken', gettoken);
router.get('/', (req,res)=>{
res.send({message:'Welcome to fyle apis'})

});


module.exports = router;
