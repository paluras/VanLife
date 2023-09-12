import { Link, NavLink } from "react-router-dom";

const HostHeader = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const newLocal = ({ isActive }) => (isActive ? activeStyle : null);
  return (
    <>
      <nav className="host-nav">
        <NavLink style={newLocal} end to="/host">
          Dashboard
        </NavLink>
        <NavLink style={newLocal} to="/host/income">
          Income
        </NavLink>
        <NavLink style={newLocal} to={"/host/vans"}>Vans</NavLink>
        <NavLink style={newLocal} to="/host/reviews">
          Reviews
        </NavLink>
      </nav>
    </>
  );
};
export default HostHeader;
