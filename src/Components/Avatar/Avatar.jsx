import React from "react";
import "./Avatar.css";

export const AvatarBox = ({ image, alt, size }) => {
  return <img src={image} className={`avatar avatar-${size}`} alt={alt} />;
};
