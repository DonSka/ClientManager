import express from "express";
import sequelize from "./db";
import Client from "./models/client";

const app = express();
const port = 3001;

app.use(express.json());

app.post("/api/clients", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const client = await Client.create({ firstName, lastName, email });
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    // res.status(400).json({ error: error.message });
  }
});

app.get("/api/clients", async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    console.error(error);
    // res.status(400).json({ error: error.message });
  }
});

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

// Lance le serveur
startServer();
