import mongoose from "mongoose";
const wishlistSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  quantity: {
    type: String,
  },
  variantId: {
    type: String,
  },
});

export default mongoose.model("wishlist", wishlistSchema);
