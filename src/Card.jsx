import React from "react";

export default function Card({ card }) {
  return (
    <div className="text-base md:text-base font-normal h-12 w-12 md:h-44 md:w-24 rounded-lg bg-yellow-100 flex justify-center items-center shadow-md relative">
      <div className="md:top-4 md:left-4 flex flex-row items-center gap-1 justify-between">
        <img src={`./${card.suit}.png`} className="w-4 h-4 md:w-6 md:h-6" />
        <p className="h-6 font-semibold">{`${card.value === 'T' ? '10': card.value}`}</p>
      </div>
    </div>
  );
}
