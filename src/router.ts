import express, { Request, Response } from "express";
import { verify } from "./verifier";

export const router = express.Router();

router.post("/validate", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await verify(JSON.parse(req.body.credential)));
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
