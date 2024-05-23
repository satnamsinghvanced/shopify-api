import mongoose from "mongoose";
const kitSchema = new mongoose.Schema({
  kitName: {
    type: String,
  },
  userId: {
    type: String,
  },
  total: {
    type: String,
  },
  kitQuantity: {
    type: String,
  },
  products: [
    {
      productId: {
        type: String,
      },
      url: {
        type: String,
      },
      quantity: {
        type: String,
      },
      variantId: {
        type: String,
      },
    },
  ],
});

export default mongoose.model("kit", kitSchema);
