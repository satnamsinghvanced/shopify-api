import express from "express";
const router = express.Router();
import Kit from "../../../models/kit/index.js";

router.post("/", async (req, res) => {
  try {
    const { kitName, userId, products } = req.body;
    const newKit = new Kit({
      kitName,
      userId,
      products,
    });
    const kit = await newKit.save();
    res.status(200).json(kit);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const kit = await Kit.find({});
    res.status(200).json(kit);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
