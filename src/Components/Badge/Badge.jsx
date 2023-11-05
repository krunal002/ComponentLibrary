import React from "react";
import "./Badge.css";

export const BadgeBox = ({ text, variant }) => {
  return <span className={`badge badge-${variant}`}>{text}</span>;
};
