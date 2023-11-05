import "./Heading.css";

export const HeadingBox = ({ variant, text }) => {
  return (
    <div className={`heading heading-${variant}`}>
      <p>{text}</p>
    </div>
  );
};
