import { Link } from "react-router-dom";
import "../css/Navbar.css";
export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src="LOGO.png" alt="Logo" />
        <span>Personal Expense Tracker</span>
      </div>
      <div className="nav-links">
        <Link to="/viewExpenses">View Expenses</Link>
        <Link to="/track">Add Expenses</Link>
        <Link><i
          className="fas fa-user-alt"
          style={{ fontSize: "24px", }}
        ></i></Link>
      </div>
    </nav>
  );
};
