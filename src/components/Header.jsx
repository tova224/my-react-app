import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <NavLink to="/" style={getLinkStyle}>Home</NavLink>
      <NavLink to="/posts" style={getLinkStyle}>Posts</NavLink>
      <NavLink to="/about" style={getLinkStyle}>About</NavLink>
    </header>
  );
}

const getLinkStyle = ({ isActive }) => ({
  margin: "0 6px",
  color: isActive ? "red" : "black",
  textDecoration: "underline",
  fontSize: "18px",
});

const styles = {
  header: {
    backgroundColor: "#eee",
    padding: "20px",
    textAlign: "center",
  },
};

export default Header;