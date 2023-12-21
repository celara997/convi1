import { Schema, model } from "mongoose";

const denunciaSchema = new Schema({
  participantes: {
    type:[String],
    required: true
  },
  donde: {
    type: String,
    required: true
  },
  cuando: {
    type:String,
    required: true
  },
  relato: {
    type:String,
    required: true
  },
  medidas: {
    type:String,
    required: true
  },
  encargado:{
    type:String,
    required: true
  }, 
});

export const denuncia = model("Denuncia", denunciaSchema);