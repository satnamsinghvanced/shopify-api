import express from "express";
const router = express.Router();
import Wishlist from "../../../models/wishlist/index.js";

router.post("/", async (req, res) => {
  try {
    const { url, quantity, variantId } = req.body;
    const newWishlist = new Wishlist({
      url,
      quantity,
      variantId,
    });
    const wishlist = await newWishlist.save();
    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const wishlist = await Wishlist.find({});
    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
router.get("/user", async (req, res) => {
  try {
    const { userId } = req.body;
    const wishlist = await Wishlist.findOne({ userId });
    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
