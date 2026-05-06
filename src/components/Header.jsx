import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/posts" style={linkStyle}>
        Posts
      </NavLink>
    </header>
  );
}

const linkStyle = ({ isActive }) => ({
  margin: "0 10px",
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