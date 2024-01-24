import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <div className="tile-list">
      {contacts&&contacts.map((item, index) => (
        <Tile key={index} {...item} />
      ))}
    </div>
  );
};
