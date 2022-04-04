import { Router } from "express";

import controller from "../controller/controllers";
import Images from "../models/Images";

const router = Router();

router.get("/", controller.index);

router.post("/uploads", controller.indexForm);

export default router;