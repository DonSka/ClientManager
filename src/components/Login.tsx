import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("authToken", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Email ou mot de passe incorrect.");
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h2>Se connecter</h2>
      <p>Vous n'avez pas de compte ?</p>
      <button onClick={handleSignup}>S'inscrire</button>
      <div></div>
      <form onSubmit={handleSubmit}>
        <h3>Ou se connecter par mail</h3>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
