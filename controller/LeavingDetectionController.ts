import type { Request, Response } from "express";
import { LeavingDetectionService } from "../service/LeavingDetectionService";
import { Server as SocketIO } from "socket.io";

export class LeavingDetectionController {
  constructor(private leavingDetectionService:LeavingDetectionService, private io: SocketIO){} //, private io: SocketIO
  leaving = async (req:Request, res: Response) => {
    const name = req.body.name;
    const result = (await this.leavingDetectionService.checkLeaving(name)) as any;
    if (!result) {
      res.status(400).json({ message: "invalid name" });
      return;
    }
    await this.leavingDetectionService.updateIsSolvedAlert(result.id);
    res.json({ message: "update successfully" });
    this.io.emit("hello", { msg: "hello im socket io" });
  };

  solved = async (req: Request, res: Response) => {
    const name = req.query.name as string;
    const result = (await this.leavingDetectionService.checkLeaving(name)) as any;
    console.log("jhsgdjshagdjhas", result);
    if (!result) {
      res.status(400).json({ message: "invalid name" });
      return;
    }
    await this.leavingDetectionService.closeAlert(result.id);
    res.json({ message: "update successfully" });
  };
}
