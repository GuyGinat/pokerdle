import React from "react";
import Card from "./Card";

export default function PlayerHand({ playerCards }) {
  return (
    <div className="flex flex-row justify-center">
          <Card card={playerCards[0]} />
          <Card card={playerCards[1]} />      
    </div>
  );
}
