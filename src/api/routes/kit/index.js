import express from "express";
const router = express.Router();
import Kit from "../../../models/kit/index.js";

router.post("/", async (req, res) => {
  try {
    const { kitName, userId } = req.body;
    const newKit = new Kit({
      kitName,
      userId,
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

router.put("/add-product", async (req, res) => {
  try {
    const { id, products } = req.body;
    const updatedFields = {products};
    await Kit.findByIdAndUpdate(
      { _id: id },
      { $set: updatedFields },
      { new: true, upsert: true }
    );
    res.status(200).json({ message: "Item added successfully " });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
