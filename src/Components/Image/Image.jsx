import "./Image.css";

export const ImageBox = ({ imageUrl, variant }) => {
  return (
    <div>
      <img src={imageUrl} alt="imageBox" className={`image image-${variant}`} />
      <p className="image-variant-info">
        <small>(Image size : {variant})</small>
      </p>
    </div>
  );
};

export const RoundImageBox = ({ imageUrl, variant }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="imageBox"
        className={`image round-image-${variant}`}
      />
      <p className="image-variant-info">
        <small>(Image size : {variant})</small>
      </p>
    </div>
  );
};
