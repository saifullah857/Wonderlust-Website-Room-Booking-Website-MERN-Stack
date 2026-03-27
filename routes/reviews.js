const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressErorr.js")
const { listingSchema } = require("../schema.js")
const { reviewSchema } = require("../schema.js")
const Listing = require("../models/List.js");
const Review = require("../models/reviews.js")
const { validateReview, isLogedIn, isOuther } = require("../middleware.js");
const { postReview, destroyReview } = require("../controllers/reviewController.js");


//Post Route
router.post("/", validateReview,isLogedIn, wrapAsync(postReview));

//Delete Route
router.delete("/:reviewId",isLogedIn,isOuther, wrapAsync(destroyReview));

module.exports = router;