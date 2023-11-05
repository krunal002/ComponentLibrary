import { BadgeBox } from "../../Components/Badge/Badge";
import "./Badge.css";

const Badge = () => {
  return (
    <main>
      <h1>Badge Component</h1>
      <p>
        The badge component is used to display and highlight short information,
        label or statuses.
      </p>
      <div className="badgebox-wrapper">
        <BadgeBox text={"Primary"} variant={"primary"} />
        <BadgeBox text={"Secondary"} variant={"secondary"} />
        <BadgeBox text={"Success"} variant={"success"} />
        <BadgeBox text={"Danger"} variant={"danger"} />
        <BadgeBox text={"Warning"} variant={"warning"} />
        <BadgeBox text={"Info"} variant={"info"} />
        <BadgeBox text={"Light"} variant={"light"} />
        <BadgeBox text={"Dark"} variant={"dark"} />
      </div>
      <br />

      <h3>How to use Badge Component?</h3>
      <iframe
        title="badge-component"
        src="https://carbon.now.sh/embed/944f9lWMj22g63eEnNmS"
        sandbox="allow-scripts allow-same-origin"
        className="badge-iframe-component"
      ></iframe>
    </main>
  );
};
export default Badge;
