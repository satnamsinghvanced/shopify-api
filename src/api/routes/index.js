import express from "express";
import auth from "../routes/auth/index.js";
import wishlist from "../routes/wishlist/index.js";
import kit from "../routes/kit/index.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/wishlist", wishlist);
router.use("/kit", kit);

export default router;
