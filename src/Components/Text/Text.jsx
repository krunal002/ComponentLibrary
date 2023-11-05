import "./Text.css";

export const TextBox = ({ variant, text }) => {
  return (
    <div className={`text text-${variant}`}>
      <p>{text}</p>
    </div>
  );
};
