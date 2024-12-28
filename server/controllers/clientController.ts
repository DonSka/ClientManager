import { Request, Response } from "express";
import Client from "../models/client";

export const addClient = async (req: Request, res: Response) => {
  const { name, lastName, mail } = req.body;

  try {
    if (!name || !lastName || !mail) {
      return res
        .status(400)
        .json({ error: "Nom, prénom et email sont requis." });
    }

    const existingClient = await Client.findOne({ where: { mail } });
    if (existingClient) {
      return res.status(409).json({ error: "Cet email est déjà utilisé." });
    }

    const newClient = await Client.create({
      name,
      lastName,
      mail,
    });

    // Retourner le client créé
    return res.status(201).json({
      message: "Client ajouté avec succès.",
      client: newClient,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur lors de l'ajout du client." });
  }
};
