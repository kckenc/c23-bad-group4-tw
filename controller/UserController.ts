import type { Request, Response } from "express";
import { UserService } from "../service/UserService";


export class UserController {
    //@ts-ignore
    constructor(private userService: UserService) {}

    login = async (req: Request, res: Response) => { 
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({ message: "invalid username or password" });
            return;
    }
    res.json({ message: "success"}); 
  };
}

