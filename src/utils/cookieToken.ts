import { getJwtToken } from "../helpers/getJwtToken";
import Response from "express"

const cookieToken = (user : any, res : Response) => {
    const token : string = getJwtToken(user.id)
}
