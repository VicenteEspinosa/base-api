import { Router, Request, Response } from "express";
import testController from "../controllers/test.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return testController(req, res);
});


export default router;