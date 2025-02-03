import { Router, Request, Response } from "express";
import testController from "../controllers/test.controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  await testController(req, res);
  return;
});


export default router;