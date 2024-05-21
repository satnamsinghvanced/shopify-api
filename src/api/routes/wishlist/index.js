import express from "express";
const router = express.Router();
import Wishlist from "../../../models/wishlist/index.js";

router.post("/", async (req, res) => {
  try {
    const { productId, userId } = req.body;
    const newWishlist = new Wishlist({
      productId,
      userId,
    });
    const ress = await newWishlist.save();
    res.status(200).json(ress);
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

export default router;
