import express from "express";
const router = express.Router();

const SHOPIFY_SCOPES = "read_products,write_products";
const SHOPIFY_REDIRECT_URI = "http://localhost:9090/shopify/callback";

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default router;
