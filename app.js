if(process.env.NODE_ENV !="production"){
    require('dotenv').config()
}

console.log(process.env.SECRET)
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const listingRouter = require("./routes/listing");
const reviewsRouter = require("./routes/reviews");
const userRouter = require("./routes/user");

const User = require("./models/user");
const ExpressError = require("./utils/ExpressErorr");

const port = 8080;

// ====== MIDDLEWARE ======
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ====== DB CONNECTION ======
mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log("MongoDB Error:", err));

// ====== SESSION ======
const sessionOptions = {
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
};

app.use(session(sessionOptions));
app.use(flash());

// ====== PASSPORT SETUP ======
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// flash middleware
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    res.locals.currUser=req.user;
    next();
});

app.get("/", (req, res) => {
    res.send("🌍 Server working properly...");
});

// ====== ROUTES ======
app.use("/listing", listingRouter);
app.use("/listing/:id/review", reviewsRouter);
app.use("/", userRouter);

// 404 handler
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// error handler
app.use((err, req, res, next) => {
    let { status = 500 } = err;
    res.status(status).render("listing/error.ejs", { err });
});

// ====== SERVER ======
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
