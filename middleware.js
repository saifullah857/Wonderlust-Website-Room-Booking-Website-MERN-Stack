const Listing = require("./models/List");
const ExpressError = require("./utils/ExpressErorr.js");
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");
const Reviews = require("./models/reviews.js");

module.exports.isLogedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be login before performing this action");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// ----------- FIXED isOwner middleware ----------
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;   // ✅ get id from URL
   
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listing");
    }

    if (!listing.owner.equals(req.user._id)) {   // ✅ correct user check
        req.flash("error", "You don't have permission to edit this listing");
        return res.redirect(`/listing/${id}`);
    }

    next();
};

// VALIDATOR
module.exports.listingValidate = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

//review validation 
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body)
    if (error) {
        // extract all error messages in a single string
        let errMsg = error.details.map(el => el.message).join(", ");

        throw new ExpressError(400, errMsg);

    } else {
        next();
    }
}


module.exports.isOuther = async (req, res, next) => {
    const { id, reviewId } = req.params;
    let review = await Reviews.findById(reviewId)
    if (!req.user || !review.author._id.equals(req.user._id)) {
        req.flash("error", "You are not Owner of this Review");
        return res.redirect(`/listing/${id}`);
    }

    next();
}

