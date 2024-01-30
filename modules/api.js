import mongoose from "mongoose";

//Schema Creation
const apiSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: String, required: true },
  fees: { type: mongoose.Decimal128, required: true, validate: (v) => v >= 5000.5 },
});

//Module creations

const ApiModule = mongoose.model("api", apiSchema);

export default ApiModule;
