import express from "express";
import { getClients } from "../controllers/clientController";
import { login, signup } from "../controllers/userController";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/clients", authenticateUser, getClients);

export default router;
