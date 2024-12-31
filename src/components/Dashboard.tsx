import { useEffect, useState } from "react";
import Client from "../Interfaces";
import ClientForm from "./ClientForm";
import Popup from "./Popup";

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    setClients([
      { firstName: "John", lastName: "Henri", email: "john.doe@example.com" },
      {
        firstName: "Jane",
        lastName: "Johnson",
        email: "jane.smith@example.com",
      },
      {
        firstName: "Alice",
        lastName: "Bricou",
        email: "alice.johnson@example.com",
      },
    ]);
  }, []);

  const handleAddClient = () => {
    console.log("Ajouter un client");
    setShowPopup(true);
  };

  const addClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hey");
  };

  return (
    <div>
      <h2>Bienvenue</h2>
      <div>
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleAddClient}>Ajouter un client</button>
        {showPopup && (
          <Popup children={<ClientForm submitFunc={addClient} />} />
        )}
      </div>
      {clients
        .filter(
          (client) =>
            client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((client, index) => (
          <li key={index}>
            {client.firstName} - {client.email}
          </li>
        ))}
    </div>
  );
};

export default Dashboard;
