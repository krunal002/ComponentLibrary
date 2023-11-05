import "./styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Home from "./Pages/Home/Home";
import ComponentsPage from "./Pages/ComponentsPage/ComponentsPage";

import Avatar from "./Documentations/Avatar/Avatar";
import Alert from "./Documentations/Alert/Alert";
import Badge from "./Documentations/Badge/Badge";
import Button from "./Documentations/Button/Button";
import Card from "./Documentations/Card/Card";
import Heading from "./Documentations/Heading/Heading";
import Text from "./Documentations/Text/Text";
import Image from "./Documentations/Image/Image";

export default function App() {
  const location = useLocation();
  const showSideBar =
    location.pathname !== "/" && location.pathname !== "/component";
  return (
    <div className="App">
      <Header />
      <div className={showSideBar ? "primary-container" : ""}>
        <div className="nav-container">{showSideBar && <SideNavBar />}</div>
        <div className="body-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/component" element={<ComponentsPage />} />
            <Route path="/components/avatar" element={<Avatar />} />
            <Route path="/components/alert" element={<Alert />} />
            <Route path="/components/badge" element={<Badge />} />
            <Route path="/components/button" element={<Button />} />
            <Route path="/components/card" element={<Card />} />
            <Route path="/components/heading" element={<Heading />} />
            <Route path="/components/text" element={<Text />} />
            <Route path="/components/image" element={<Image />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
