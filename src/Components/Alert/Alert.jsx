import React from "react";
import "./Alert.css";

export const AlertBox = ({ text, variant }) => {
  return <p className={`alert alert-${variant}`}>{text}</p>;
};
