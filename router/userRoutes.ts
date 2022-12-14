import express from "express";
import { userController } from "../server";

export const userRoutes = express.Router();
userRoutes.post("/login", userController.login);
userRoutes.post("/register", userController.register);
// userRoutes.get("/login/google", userController.loginGoogle);
userRoutes.get("/logout", userController.logout);