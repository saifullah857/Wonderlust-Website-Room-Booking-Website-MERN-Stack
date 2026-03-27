const express = require("express");
const app = express();
const session = require("express-session")
const cookieParser = require("cookie-parser");
const path = require("path")
const flash = require("connect-flash")
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {

    secret: "mySecretKey123",
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionOptions));
app.use(flash());


app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success")
    res.locals.errorMsg = req.flash("error")
    next()
})
app.get("/register", (req, res) => {
    let { name = "Anomynous" } = req.query;
    req.session.name = name;

    if (name === "Anomynous") {
        req.flash("error", "User Not Register !")
    } else {
        req.flash("success", "User Register successfully!")
    }
    res.redirect(`/hello`)
})

app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name })
})



app.get("/test", (req, res) => {
    res.send("testing successfull")
})

// app.get("/reuestcount", (req, res) => {
//     if( req.session.count){
//          req.session.count++;
//     }else{
//         req.session.count=1
//     }
//     res.send(`you sent request ${req.session.count} times`)
// })

app.listen(3000, (req, res) => {
    console.log('listining on port 3000')
})