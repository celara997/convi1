import { encargado } from "../../models/encargado.model"

export default defineEventHandler(async (event) => {
    const encargados = await encargado.find();
    if (!encargados || encargados.length === 0) throw createError({
        statusCode: 500,
        statusMessage: 'No se encontraron encargados',
      });
    return encargados;
})
