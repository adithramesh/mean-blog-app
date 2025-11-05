import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { HttpStatus } from "../utils/http-status.enum";
import { config } from "../config/env.config";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role?: string;
  };
}

export const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: "Access token missing or malformed",
        status: HttpStatus.UNAUTHORIZED,
      });
      return;
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, config.JWT_SECRET) as { id: string; role?: string };
    req.user = { id: decoded.id, role: decoded.role };

    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    res.status(HttpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Invalid or expired access token",
      status: HttpStatus.UNAUTHORIZED,
    });
  }
};
