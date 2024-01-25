import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <div className="tile">
        <h2>{name}</h2>
        {Object.keys(description).map((key, i) => {
          return (
            <p className="tile" key={i}>
              {description[key]}
            </p>
          )
        })}
      </div>
    </div>
  );
};
