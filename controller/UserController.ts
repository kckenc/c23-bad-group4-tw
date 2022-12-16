import { InvalidLoginError, UnauthorizedError} from "./../utils/error";
import type { Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserController {
  constructor(private userService: UserService) {}

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new InvalidLoginError();
    }

   try {
    const user = await this.userService.checkLogin(username, password);
    if (user.id) {
      req.session["user"] = { id: user.id };
    res.status(200).json({ message: "success" });

   } } catch (e) {
    throw new UnauthorizedError();
   }
  };
}
