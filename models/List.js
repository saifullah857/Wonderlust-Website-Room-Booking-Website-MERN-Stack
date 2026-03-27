const mongoose = require("mongoose");
const Review=require("./reviews.js")
const User=require("./user.js")
const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename:String
  },
  
  price: {
    type: Number,
    default: 1000,
  },
  location: String,
  country: String,
  reviews:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Reviews"
    }
  ],
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  
});

listSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}})
  }
})

const Listing = mongoose.model("Listing", listSchema);
module.exports = Listing;
