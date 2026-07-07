import { Router } from "express"
import userRouter from "./userRouter.js"
import productRouter from "./productRouter.js"
import cors from "cors"

const router = Router()

router.use(cors())

router.use("/usuarios", userRouter)
router.use("/productos", productRouter)

export default router