import "./Button.css";
import { ButtonBox } from "../../Components/Button/Button";

const Button = () => {
  return (
    <main>
      <div className="standard-button">
        <h1>Button Component</h1>
        <p>Button component provides various styles for different actions.</p>
        <div>
          <ButtonBox title={"Solid Button"} variant={"solid"} />
          <ButtonBox title={"Outline Button"} variant={"outlined"} />
          <ButtonBox title={"Text Button"} variant={"text"} />
          <ButtonBox title={"Link Button"} variant={"link"} />
        </div>
        <br />

        <h3>How to use Button Component?</h3>
        <iframe
          title="button-component"
          src="https://carbon.now.sh/embed/NLAFwjMWkHGWyHYB80L5"
          sandbox="allow-scripts allow-same-origin"
          className="button-iframe-component"
        ></iframe>
      </div>

      {/* Icon Buttons */}
      {/* <div className="icon-button">
        <h1>Icon Button Component</h1>
        <p>Icon button components combine icons with text for actions.</p>
        <div>
          <IconButtonBox title={"Search"} variant={"serach"} />
          <IconButtonBox title={"Edit"} variant={"edit"} />
          <IconButtonBox title={"Delete"} variant={"delete"} />
          <IconButtonBox title={"Add"} variant={"add"} />
        </div>
        <br />

        <h3>How to use Icon Button Component?</h3>
        <iframe
          title="button-component"
          src="https://carbon.now.sh/embed/NLAFwjMWkHGWyHYB80L5"
          sandbox="allow-scripts allow-same-origin"
          className="button-iframe-component"
        ></iframe>
      </div> */}
    </main>
  );
};
export default Button;
