import type { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "./error";

export const isLoggedInAPI = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session["user"]) {
    throw new UnauthorizedError();
  }
  next();
};

export const isLoggedInStatic = (req: Request, res: Response, next: NextFunction) => {
  if (req.session["user"]) {
    res.status(201);
    next();
    return;
  }
  return;
};