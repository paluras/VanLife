import { Link , NavLink} from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };
    const newLocal = ({ isActive }) => isActive ? activeStyle : null;
  return (
    <>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <NavLink style={newLocal}  to="/host">Host</NavLink>
          <NavLink style={newLocal}  to="/about">About</NavLink>
          <NavLink style={newLocal}  to="/vans">Vans</NavLink>
          <Link to="login" className="login-link">
                    <img 
                        src="../assets/images/login.png" 
                        className="login-icon"
                    />
                </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
