import "./Navbar.css";
import ButtonJSX from "../ButtonJSX";
import { BsFillCartFill } from "react-icons/bs";
import { Button } from "@mui/material";
//import { fas fa-shopping-cart } from "@FontAwesomeIcon";

const Navbar = () => {
  const handleclick = (name) => {
    alert("Aprete el " + name);
  };
  // const link = (name) => {
  // link = name;
  // };
  return (
    <nav className="container">
      <Button href="/" variant="outlined">
        HOME
      </Button>
      <Button href="/Lista" variant="outlined">
        Lista
      </Button>
      <Button href="/Contacto" variant="outlined">
        Contacto
      </Button>
      <Button href="/Grupos" variant="outlined">
        Grupos
      </Button>
    </nav>
  );
};

export default Navbar;
