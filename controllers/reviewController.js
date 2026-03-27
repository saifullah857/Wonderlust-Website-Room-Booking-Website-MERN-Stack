
const Review=require("../models/reviews.js")
const Listing=require("../models/List.js")  

module.exports.postReview=async (req, res) => {
    console.log(req.params.id)
    let listing = await Listing.findById(req.params.id)
    let newReview = new Review(req.body.review)
    newReview.author=req.user._id;
    listing.reviews.push(newReview)

    await newReview.save()
    await listing.save()

    console.log("new revivew is saved")
    req.flash("success", " New Review Ceated Successfully!")
    res.redirect(`/listing/${listing._id}`);
}


module.exports.destroyReview=async (req, res) => {
    const { id, reviewId } = req.params;
    let listing=await Review.findById(reviewId)

    // Remove review from Listing
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    // Delete review document
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", " Review Deleted")
    res.redirect(`/listing/${id}`);
}