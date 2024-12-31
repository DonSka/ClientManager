import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import sequelize from "./db";
import clientsRoutes from "./routes/clientsRoutes";
import usersRoutes from "./routes/usersRoutes";

dotenv.config();
const app = express();
const port = 3001;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/users", usersRoutes);
app.use("/api/clients", clientsRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
