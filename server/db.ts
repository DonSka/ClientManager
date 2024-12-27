// server/db.ts
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("clientmanager", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
