import { denuncia } from "../../models/denuncias.model";


export default defineEventHandler(async (event) => {
    const denuncias = await denuncia.find().populate("encargado");
    if (!denuncia || denuncia.length === 0) throw createError({
        statusCode: 500,
        statusMessage: 'No se encontraron denuncias',
      });
    return denuncias;
})
