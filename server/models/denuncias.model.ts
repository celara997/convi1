import { Schema, model } from "mongoose";

const denunciaSchema = new Schema({
  test: String
});

export const denuncia = model("Denuncia", denunciaSchema);