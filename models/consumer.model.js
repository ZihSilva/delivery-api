import { Schema, model } from "mongoose";

const consumerSchema = new Schema({
  name: { type: String, require: true, minLength: 3 },
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
  },
  phone: {
    type: Number,
    required: true,
    match: /^ (\() ?\d{ 2}(\)) ? (-|\s)?\d{ 4}(-|\s) \d{ 4 } $ /,
  },
  address: { type: String, required: true, trim: true, min: 5, max: 100 },
  city: { type: String, required: true, trim: true, min: 3, max: 30 },
  country: { type: String, required: true, trim: true, min: 5, max: 30 },
});

const ConsumerModel = model("Consumer", consumerSchema);

export { ConsumerModel };
