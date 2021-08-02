import express, { Request, Response } from "express";

export const router = express.Router();

router.post("/webhook", async (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json({});
});

router.get("/health", (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };

  res.status(200).json(data);
});
