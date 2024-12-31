import React, { useState } from "react";
import Client from "../Interfaces";

interface ClientFormProps {
  clientItem?: Client;
  submitFunc: (e: React.FormEvent) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({
  clientItem = { firstName: "", lastName: "", email: "" },
  submitFunc,
}) => {
  const [currentClient, setCurrentClient] = useState<Client>(clientItem);

  return (
    <form onSubmit={submitFunc}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          value={currentClient.lastName}
          onChange={(e) =>
            setCurrentClient({ ...currentClient, lastName: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Prénom :</label>
        <input
          type="text"
          value={currentClient.firstName}
          onChange={(e) =>
            setCurrentClient({
              ...currentClient,
              firstName: e.target.value,
            })
          }
          required
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          value={currentClient.email}
          onChange={(e) =>
            setCurrentClient({ ...currentClient, email: e.target.value })
          }
          required
        />
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default ClientForm;
