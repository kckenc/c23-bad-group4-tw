// import { InvalidLoginError} from "./../utils/error";
import type { Request, Response } from "express";
// import { User } from "../service/models";
import { UserService } from "../service/UserService";
import { checkPassword, hashPassword } from "../utils/hash";


export class UserController {
  constructor(private userService: UserService) {}

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log("test user controller", req.body);
    try {
      const user = await this.userService.checkLogin(username);
      const match = await checkPassword(password, user.password);
      if(!username || !password) {
        res.json({message: "Cannot be empty"});
      }
      if (user.username && match) {
        req.session["user"] = { id: user.id, username: user.username };
        res.status(200).json({message: "success"});
        console.log(req.session["user"]);
    }} catch (e) {
      res.status(400).json({ message: "invalid login" });
    }
  };

  register = async (req: Request, res: Response) => {
    const registerName = req.body.registerName as string;
    const registerPassword = req.body.registerPassword as string;
    const registerPassword2 = req.body.registerPassword2 as string;
    console.log(registerName, registerPassword, registerPassword2)
    if (!registerName || !registerPassword || !registerPassword2){
      res.json({message: "Cannot be empty"})
      return;
    }
    if (registerPassword !== registerPassword2) {
      res.json({ message: "inconsistent password" });
      return;
    }
    const hashedPassword = await hashPassword(registerPassword) as any as string;
    await this.userService.register(registerName, hashedPassword);
  };

  logout = async (req: Request, res: Response) => {
    console.log("logout success");
    delete req.session["user"];
    res.redirect("/");
  };
}
