// import { Request, Response } from "express";
// import { checkPassword } from "../utils/hash";
// import { logger } from "../utils/logger";
// import { UserService } from "../service/UserService";

// export class UserController {
//     constructor(private userService: UserService) {}
  
//     // Must be arrow function !!!
//     login = async (req: Request, res: Response) => {
//       try {
//         const { username, password } = req.body;
//         if (!username || !password) {
//           res.status(400).json({ message: "missing username / password" });
//           return;
//         }
  
//         const user = await this.userService.getUserByUsername(username);
//         if (!user || !(await checkPassword(password, user.password))) {
//           res.status(400).json({ message: "invalid username / password" });
//           return;
//         }
  
//         req.session.user = { id: user.id };
//         res.json({ message: "success" });
//       } catch (err) {
//         logger.error(err.message);
//         res.status(500).json({ message: "internal server error" });
//       }
//     };
// }
