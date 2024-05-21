import mongoose from "mongoose";
const wishlistSchema = new mongoose.Schema({
  productId: {
    type: String,
  },
  userId: {
    type: String,
  },
});

export default mongoose.model("wishlist", wishlistSchema);
