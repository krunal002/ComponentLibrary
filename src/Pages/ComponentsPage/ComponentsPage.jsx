import "./ComponentsPage.css";
import { useNavigate } from "react-router-dom";

const ComponentsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="components-primary-container">
      <h1>Components</h1>
      <div>
        <div className="component-container">
          <button
            className="component-button"
            onClick={() => navigate("/components/avatar")}
          >
            Avatar
          </button>
          <button
            className="component-button"
            onClick={() => navigate("/components/alert")}
          >
            Alert
          </button>
          <button
            className="component-button"
            onClick={() => navigate("/components/badge")}
          >
            Badge
          </button>
          <button
            className="component-button"
            onClick={() => navigate("/components/button")}
          >
            Button
          </button>
          <button
            className="component-button"
            onClick={() => navigate("/components/card")}
          >
            Card
          </button>
          <button
            className="component-button"
            onClick={() => navigate("/components/heading")}
          >
            Headings
          </button>
          <button
            className="component-button"
            onClick={() => navigate("/components/text")}
          >
            Text
          </button>
          <button
            className="component-button"
            onClick={() => navigate("/components/image")}
          >
            Image
          </button>
        </div>
      </div>
    </div>
  );
};
export default ComponentsPage;
