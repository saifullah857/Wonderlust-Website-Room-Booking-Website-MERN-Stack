const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const { renderSignupForm, postUser, renderLoginForm, postLogin, logout } = require("../controllers/userController");

router
.route("/signup")
.get( renderSignupForm)
.post( postUser)

router.route("/login")
.get( renderLoginForm)
.post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),postLogin)



router.get('/logout',logout)


module.exports = router;
