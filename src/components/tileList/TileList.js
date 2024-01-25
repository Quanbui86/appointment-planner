import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div className="tile-list">
      {data && data.map((contact, i) => {
        const { name, ...description } = contact;
        return <Tile name={name} description={description} key={i} />;
      })}
    </div>
  );
};
