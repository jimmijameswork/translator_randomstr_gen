import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/translate">Translate</Link>
      <Link to="/random">Random String</Link>
    </nav>
  );
}
