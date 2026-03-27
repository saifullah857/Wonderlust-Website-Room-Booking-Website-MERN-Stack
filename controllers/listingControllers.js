const Listing = require("../models/List.js")
const axios = require("axios");
require("dotenv").config();

module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listing/index.ejs", { allListing });
}





module.exports.showListing = async (req, res) => {
    const { id } = req.params;

    let listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listing");
    }

    const params = {
        access_key: process.env.POSITIONSTACK_KEY,
        query: listing.location,
        limit:1
    };

    let lat = 0, lng = 0;

    try {
        let response = await axios.get("http://api.positionstack.com/v1/forward", { params });

        if (response.data && response.data.data.length > 0) {
            loc=response.data.data[0]
            lat = loc.latitude;
            lng = loc.longitude;
            console.log("Respons data is :",response.data.data)
        }
    } catch (err) {
        // console.log("PositionStack Error:", err);
    }

    // 🔥 Correct path
    res.render("listing/show", { listing, lat, lng });
};


module.exports.createNewListing = async (req, res) => {
    let url = req.file.path
    let filename = req.file.filename

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename }
    await newListing.save();

    req.flash("success", "New Listing Created Successfully!");
    res.redirect("/listing");
}


module.exports.renderUpdateListingForm = (req, res) => {

    res.render("listing/create.ejs");
}

module.exports.editListingRenderForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listing");
    }

    res.render("listing/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;


    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path
        let filename = req.file.filename
        listing.image = { url, filename }
        await listing.save()
    }

    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listing/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listing");
}

