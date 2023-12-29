import { Schema, model } from "mongoose";

const encargadoSchema = new Schema({
  nombre: {
    type:String,
    required: true
  },
  cargo: {
    type: String,
    required: true
  }
});

export const encargado = model("encargado", encargadoSchema);