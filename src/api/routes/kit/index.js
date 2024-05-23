import express from "express";
const router = express.Router();
import Kit from "../../../models/kit/index.js";

router.post("/save", async (req, res) => {
  try {
    const { kitName, userId, products, total, kitQuantity } = req.body;
    const newKit = new Kit({
      kitName,
      userId,
      products,
      total,
      kitQuantity,
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

router.put("/update", async (req, res) => {
  try {
    const { id, products, total, kitQuantity } = req.body;
    const updatedFields = { products, total, kitQuantity };
    const result = await Kit.findByIdAndUpdate(
      { _id: id },
      { $set: updatedFields },
      { new: true, upsert: true }
    );
    res.status(200).json({ message: "Item added successfully ", result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    let deleted = await Kit.deleteOne({ _id: id });
    res.status(200).send({ message: "Kit deleted successfully!", deleted });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.delete("/delete-product", async (req, res) => {
  try {
    const { kitId, productId } = req.body;
    const kit = await Kit.findOne({ _id: kitId });
    kit.products = kit.products.filter(
      (elm) => elm._id.toString() !== productId
    );

    await kit.save();
    return res.status(200).json(kit);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
