import { denuncia } from "../../models/denuncias.model"
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    const newelement = new denuncia({...body});
    newelement.save();

    return `Denuncia creada`
})
