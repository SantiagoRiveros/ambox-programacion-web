import { Router } from "express"
import userRouter from "./userRouter.js"
import productRouter from "./productRouter.js"
import cors from "cors"

const router = Router()

router.use(cors())

router.use("/usuarios", userRouter) // http:localhost:3000/usuarios usa userRouter
router.use("/productos", productRouter) // http:localhost:3000/productos usa productRouter

export default router