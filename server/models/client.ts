// server/models/client.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class Client extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "clients",
  }
);

export default Client;
