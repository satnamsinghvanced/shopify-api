import express from "express";
import auth from "../routes/auth/index.js";
import wishlist from "../routes/wishlist/index.js"

const router = express.Router();

router.use("/auth", auth);
router.use("/wishlist", wishlist);

export default router;
