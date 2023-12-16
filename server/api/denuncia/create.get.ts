import { denuncia } from "../../models/denuncias.model";

export default defineEventHandler(async (event) => {
  const test =  await denuncia.find();
  console.log(test);
  return test
});