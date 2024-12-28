// server/models/client.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../db";
import User from "./user";

class Client extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  userId!: number;
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
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "clients",
  }
);

User.hasMany(Client, { foreignKey: "userId" });
Client.belongsTo(User, { foreignKey: "userId" });

export default Client;
