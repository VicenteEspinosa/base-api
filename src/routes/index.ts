import { Router, Request, Response } from "express";
import testController from "../controllers/test.controller";
import testcreateController from "../controllers/testCreate.controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  await testController(req, res);
  return;
});

router.post("/", async (req: Request, res: Response) => {
  await testcreateController(req, res);
  return;
});


export default router;