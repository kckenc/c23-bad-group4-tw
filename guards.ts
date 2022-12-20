import type { Request, Response, NextFunction } from "express";

export const isLoggedInStatic = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (req.session["user"]) {
      console.log(req.session["user"]);
      next();
    } else {
      res.redirect("/");
      console.log("login fail",req.session["user"]);
    }
  };
