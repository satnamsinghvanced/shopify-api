import mongoose from "mongoose";
const kitSchema = new mongoose.Schema({
  kitName: {
    type: String,
  },
  userId: {
    type: String,
  },
  products: [
    {
      productId: {
        type: String,
      },
      productName: {
        type: String,
      },
      price: {
        type: String,
      },
      color: {
        type: String,
      },
    },
  ],
});

export default mongoose.model("kit", kitSchema);
