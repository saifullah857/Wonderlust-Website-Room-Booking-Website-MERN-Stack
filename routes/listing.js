const express = require("express");
const router = express.Router();
const Listing = require("../models/List.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressErorr.js");
const { listingSchema } = require("../schema.js");
const { isLogedIn, isOwner, listingValidate } = require("../middleware.js");
const { index, createNewListing, editListingRenderForm, updateListing, deleteListing, showListing, renderUpdateListingForm } = require("../controllers/listingControllers.js");
const multer = require('multer')
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// ===== CORRECT ROUTE ORDER =====

// CREATE FORM (must be first)
router.get("/new", isLogedIn, renderUpdateListingForm);

router
    .route("/")
    .get(wrapAsync(index))
    .post(isLogedIn, upload.single('listing[image]'), wrapAsync(createNewListing))
    


router
    .route("/:id")
    .get(wrapAsync(showListing))
    .put(isLogedIn, isOwner,upload.single('listing[image]'),  wrapAsync(updateListing))
    .delete(isLogedIn, isOwner, wrapAsync(deleteListing))


// EDIT FORM
router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(editListingRenderForm));

module.exports = router;
