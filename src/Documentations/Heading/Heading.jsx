import { HeadingBox } from "../../Components/Heading/Heading";
import "./Heading.css";

const Heading = () => {
  return (
    <main>
      <h1>Heading Component</h1>
      <p>Heading is used to render semantic HTML heading elements.</p>
      <div>
        <HeadingBox variant={"4xl"} text={"(4xl) In love with React & Next"} />
        <HeadingBox variant={"3xl"} text={"(3xl) In love with React & Next"} />
        <HeadingBox variant={"2xl"} text={"(2xl) In love with React & Next"} />
        <HeadingBox variant={"xl"} text={"(xl) In love with React & Next"} />
        <HeadingBox variant={"lg"} text={"(lg) In love with React & Next"} />
        <HeadingBox variant={"md"} text={"(md) In love with React & Next"} />
        <HeadingBox variant={"sm"} text={"(sm) In love with React & Next"} />
      </div>
      <br />

      <h3>How to use Heading Component?</h3>
      <iframe
        title="heading-component"
        src="https://carbon.now.sh/embed/eY5AkoJMffSyk3bIfbZS"
        sandbox="allow-scripts allow-same-origin"
        className="heading-iframe-component"
      ></iframe>
    </main>
  );
};
export default Heading;
