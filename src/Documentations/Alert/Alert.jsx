import { AlertBox } from "../../Components/Alert/Alert";
import "./Alert.css";

const Alert = () => {
  return (
    <main className="alert-component-container">
      <h1>Alert Component</h1>
      <p>
        The alert component is used to display various types of messages with
        different statuses.
      </p>
      <div className="alertbox-wrapper">
        <AlertBox text={"This is an Error Alert"} variant={"error"} />
        <AlertBox text={"This is an Success Alert"} variant={"success"} />
        <AlertBox text={"This is an Warning Alert"} variant={"warning"} />
        <AlertBox text={"This is an Primary Alert"} variant={"primary"} />
        <AlertBox text={"This is an Secondary Alert"} variant={"secondary"} />
        <AlertBox text={"This is an Light Alert"} variant={"light"} />
        <AlertBox text={"This is an Dark Alert"} variant={"dark"} />
      </div>
      <br />

      <h3>How to use Alert Component?</h3>
      <iframe
        title="alert-component"
        src="https://carbon.now.sh/embed/fsc4bJzRs44g8CEPDTbz"
        sandbox="allow-scripts allow-same-origin"
        className="alert-iframe-component"
      ></iframe>
    </main>
  );
};
export default Alert;
