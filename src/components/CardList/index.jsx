import React from "react";
import "./index.css";
import {Card} from "../Card"
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card monster={monster}/>
      ))}
    </div>
  );
};
