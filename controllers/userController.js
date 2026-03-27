
const User = require("../models/user");

module.exports.renderSignupForm=(req, res) => {
    res.render("user/signup.ejs");
}

module.exports.postUser=async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        await User.register(newUser, password);
       req.login(newUser,(err)=>{
        if(err){
            return next(err)
        }
         req.flash("success", "Welcome to Wonderlust!");
        res.redirect("/listing");
       })
       
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm=(req, res) => {
    res.render("user/login.ejs");
}
module.exports.postLogin=async (req, res) => {
        req.flash("success", "Welcome back to Wonderlust!");
        const redirectUrl = res.locals.redirectUrl || '/listing';
        res.redirect(redirectUrl);
    }

    module.exports.logout= (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err)
        }
        req.flash("success", "User loged Out succsessfully")
    res.redirect("/listing")
    })
}