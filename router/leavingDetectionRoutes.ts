import express from "express";
import { leavingDetectionController } from "../server";

export const leavingDetectionRoutes = express.Router();

leavingDetectionRoutes.post("/hi", leavingDetectionController.leaving);