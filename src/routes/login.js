/**
 * This class sets the routes for the authentication / conformation pages
 */

var router = require('express').Router();
var control = require('../controllers/login');
var boloControl = require('../controllers/bolo');
var passControl = require('../controllers/resetPassword');

router.get('/login', control.getLogIn);
router.post('/login', control.attemptLogIn);
router.get('/bingo', control.attemptBingo2);
router.post('/bingo', control.attemptBingo1);
router.get('/checkTier', control.checkTier);
router.get('/logout', control.LogOut);
router.get('/forgotPassword', control.renderForgotPasswordPage);
router.post('/forgotPassword', control.postForgotPassword);
router.get('/forgotpassword/:token', control.getResetForgottenUserPass);
router.get('/bolo/confirm/:token', boloControl.loggedOutConfirmBolo);
router.post('/newPass/:token', passControl.newPassword);

module.exports = router;