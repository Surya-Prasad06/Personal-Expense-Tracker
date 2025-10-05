import "../css/Home.css"
import { Link } from "react-router-dom";
const Home = () => {
  return (
   <div className="landing-container">
  <h1>Expenses Tracker</h1>
  <p>
    A budget is telling your money where to go, instead of wondering where it went
  </p>
  <Link to="/track"><button>Track Your Expenses</button></Link>
</div>

  );
};

export default Home;
