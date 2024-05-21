import dotenv from "dotenv";
dotenv.config();
const { PORT, DATABASE, JWT_SECRET, SHOPIFY_API_KEY, SHOPIFY_API_SECRET } =
  process.env;

export default {
  PRODUCTION_PORT: PORT,
  DATABASE,
  JWT_SECRET,
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
};
