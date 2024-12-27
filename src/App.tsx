import React, { useEffect, useState } from "react";

interface Client {
  id: number;
  name: string;
}

function App() {
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/clients");
        if (!response.ok) {
          throw new Error("Failed to fetch clients");
        }
        const data: Client[] = await response.json();
        setClients(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des clients</h1>
      {error ? (
        <p className="text-red-500">Erreur : {error}</p>
      ) : (
        <ul>
          {clients.length > 0 ? (
            clients.map((client) => (
              <li key={client.id} className="mb-2 p-2 bg-gray-100 rounded">
                {client.name}
              </li>
            ))
          ) : (
            <p>Aucun client disponible</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
