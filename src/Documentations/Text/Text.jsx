import { TextBox } from "../../Components/Text/Text";
import "./Text.css";

const Text = () => {
  return (
    <main>
      <h1>Text Component</h1>
      <p>Text is used to render text and paragraphs within an interface</p>
      <div>
        <TextBox variant={"4xl"} text={"(4xl) In love with React & Next"} />
        <TextBox variant={"3xl"} text={"(3xl) In love with React & Next"} />
        <TextBox variant={"2xl"} text={"(2xl) In love with React & Next"} />
        <TextBox variant={"xl"} text={"(xl) In love with React & Next"} />
        <TextBox variant={"lg"} text={"(lg) In love with React & Next"} />
        <TextBox variant={"md"} text={"(md) In love with React & Next"} />
        <TextBox variant={"sm"} text={"(sm) In love with React & Next"} />
      </div>
      <br />

      <h3>How to use Text Component?</h3>
      <iframe
        title="title-component"
        src="https://carbon.now.sh/embed/eY5AkoJMffSyk3bIfbZS"
        sandbox="allow-scripts allow-same-origin"
        className="text-iframe-component"
      ></iframe>
    </main>
  );
};
export default Text;
