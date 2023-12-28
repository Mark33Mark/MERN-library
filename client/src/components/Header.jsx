import { Link, NavLink } from "react-router-dom";
import { BooksIcon } from "../components";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <BooksIcon height={32} width={32} /> My Library
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
