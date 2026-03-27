const mongoose = require("mongoose");
const Listing = require("../models/List.js");
const initData = require("./data.js")

MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
  await Listing.deleteMany({})
  initData.data=initData.data.map((obj) => ({ ...obj, owner: "6934f9e8393ac027e3a0edfe" }))
  await Listing.insertMany(initData.data)
  console.log("data was inialized")
}

initDB();