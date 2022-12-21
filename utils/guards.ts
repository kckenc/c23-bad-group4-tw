import type { Request, Response, NextFunction } from "express";

export const isLoggedInStatic = (req: Request, res: Response, next: NextFunction) => {
  console.log("guard", req.session["user"]);
  if (req.session["user"]) {
    console.log("login success", req.session["user"]);
    next();
  } else {
    res.redirect("/");
    console.log("login fail bitch");
  }
};
