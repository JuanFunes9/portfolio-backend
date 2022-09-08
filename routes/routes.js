const router = require('express').Router();

//------------------Controllers------------------//
const {
	getIndex,
	getCV,
	sendEmail
} = require('../controllers/controllers')




//------------------Routes------------------//
router.get('/', getIndex);

router.get('/curriculum', getCV);

router.post('/send-form', [
	
], sendEmail);

router.get('/*', (req, res) => {
  res.status(404).json({
    msg: "Ruta no implementada."
  })
});



module.exports = router;