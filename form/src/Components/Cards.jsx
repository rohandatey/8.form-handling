import React from "react";
import Card from "./Card";

const Cards = ({ users }) => {
  return (
    <div className="w-full p-4 max-h-96 flex items-center justify-center gap-4 flex-wrap overflow-auto">
      {users.map((item, index) => {
        return <Card key={index} user={item} />;
      })}
    </div>
  );
};

export default Cards;