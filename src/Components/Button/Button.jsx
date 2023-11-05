import React from "react";
import "./Button.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import DeleteIcon from "@mui/icons-material/Delete";

export const ButtonBox = ({ title, variant }) => {
  return <button className={`button button-${variant}`}>{title}</button>;
};

export const IconButtonBox = ({ title, variant }) => {
  const icons = [
    { delete: <DeleteIcon /> },
    { edit: <EditRoadIcon /> },
    { search: <SearchIcon /> },
    { add: <AddIcon /> }
  ];

  // console.log(icons);
  return <button className={`button button-${variant}`}>{title}</button>;
};
