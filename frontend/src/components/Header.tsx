import { Link } from "react-router-dom";
import "../styles/header.css";

export function Header() {
  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      <Link to="/list">Countries</Link>
    </header>
  );
}
