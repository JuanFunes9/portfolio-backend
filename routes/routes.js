const router = require('express').Router();
const { check } = require( 'express-validator' );

//------------------Middlewares------------------//
const validarCampos = require( '../middlewares/validarCampos' );

//------------------Controllers------------------//
const {
	getCV,
	sendEmail
} = require('../controllers/controllers')




//------------------Routes------------------//

router.get('/curriculum', getCV);

router.post('/send-email', [
	check('name', 'El nombre es obligatorio').notEmpty(),
  check('email', 'El email es obligatorio y debe ser correcto').isEmail(),
  check('subject', 'El asunto es obligatorio').notEmpty(),
  check('text', 'El cuerpo del mensaje es obligatorio').notEmpty(),
  validarCampos
], sendEmail);

router.get('/*', (req, res) => {
  res.status(404).json({
    msg: "Ruta no implementada!!."
  })
});



module.exports = router;