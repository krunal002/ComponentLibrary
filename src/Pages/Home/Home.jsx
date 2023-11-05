import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Unique Component Library</h1>
      <p>A collection of innovative components for morden web development</p>
      <button
        className="button-container"
        onClick={() => navigate("/component")}
      >
        Get Started
      </button>
    </div>
  );
};
export default Home;
