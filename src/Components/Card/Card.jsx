import "./Card.css";
import CloseIcon from "@mui/icons-material/Close";

export const CardWithBadge = ({ title, content, badge }) => {
  return (
    <div className="cardWithBadge-container">
      <h3>{title}</h3>
      <p className="cardWithBadge-content">{content}</p>
      <span className="cardWithBadge-badge">{badge}</span>
    </div>
  );
};

export const CardWithDismiss = ({ title, content }) => {
  return (
    <div className="cardWithBadge-container">
      <h3>{title}</h3>
      <p className="cardWithBadge-content">{content}</p>
      <span className="cardWithBadge-dismiss">
        <CloseIcon />
      </span>
    </div>
  );
};

export const CardWithTextOverlay = ({ imageURL, title, content }) => {
  return (
    <div className="cardWithTextOverlay-container">
      <div>
        <img
          src={imageURL}
          alt="cardImage"
          className="cardWithTextOverlay-image"
        />
      </div>
      <div className="cardWithTextOverlay-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export const TextOnlyCard = ({ content }) => {
  return (
    <div className="textOnlyCard-container">
      <p>{content}</p>
    </div>
  );
};

export const VerticleCard = ({ imageURL, title, content }) => {
  return (
    <div className="verticleCard-container">
      <div>
        <img src={imageURL} alt="cardImage" className="verticleCard-image" />
      </div>
      <div className="verticleCard-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export const HorizontalCard = ({ imageURL, title, content }) => {
  return (
    <div className="horizontalCard-container">
      <div>
        <img src={imageURL} alt="cardImage" className="horizontalCard-image" />
      </div>
      <div className="horizontalCard-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};
