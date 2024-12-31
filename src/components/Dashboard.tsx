import { useState } from "react";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
  ]);

  const handleAddClient = () => {
    console.log("Ajouter un client");
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
      </div>
      <ul>
        {clients
          .filter(
            (client) =>
              client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              client.email.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((client) => (
            <li key={client.id}>
              {client.name} - {client.email}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;
