import type { Request, Response } from "express";
import { LeavingDetectionService } from "../service/LeavingDetectionService";
// import{ Server as SocketIO } from "socket.io"

export class LeavingDetectionController {
  constructor(private leavingDetectionService:LeavingDetectionService){} //, private io: SocketIO
  leaving = async (req:Request, res: Response) => {
    const name = req.body.name;
    const result = (await this.leavingDetectionService.checkLeaving(name)) as any as number;
    if (!result) {
      res.status(400).json({ message: "invalid name" });
      return;
    }
    await this.leavingDetectionService.updateIsSolvedAlert(result);
    res.json({ message: "update successfully" })
    console.log(result)
  }
}