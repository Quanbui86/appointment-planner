import React from "react";

export const Tile = ({ name, description }) => {
  console.log(description)
  console.log(Object.entries(description))
  return (
    <div className="tile-container">
      <div className="tile">
        <h2>{name}</h2>
        {Object.entries(description).map(([key, value], index) => (
        <p key={index}>
          <strong>{key}:</strong> {value}
        </p>
      ))}
      </div>
    </div>
  );
};
