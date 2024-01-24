import React from "react";

export const Tile = ({name, phone, email}) => {
  return (
    <div className="tile-container">
      <div className="tile">
      <h2>{name}</h2>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
    </div>
  );
};
