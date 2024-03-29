import React, { useEffect, useState } from "react";

export default function CardSmall({ card, shownCards, select, selectedCards, guessed, pcHand }) {

  const [isShown, setIsShown] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [wasGuessed, setWasGuessed] = useState(false)
  const [isInPcHand, setIsInPcHand] = useState(false)

  useEffect(() => {    
    let sc = shownCards.filter(c => c.value === card.value && c.suit === card.suit)    
    if (sc.length > 0) {
      setIsShown(true)
    } else {
      setIsShown(false)
    }
  }, [shownCards])

  const handleSelectCard = () => {
    if (isShown) return;
    else {
      select(card)
      setIsSelected(!isSelected)
    }
  }

  useEffect(() => {    
    setIsInPcHand(pcHand.filter(sc => sc.value === card.value && sc.suit === card.suit).length > 0)    
  }, [pcHand])

  useEffect(() => {    
    setIsSelected(selectedCards.filter(sc => sc.value === card.value && sc.suit === card.suit).length > 0)    
  }, [selectedCards])


  useEffect(() => {
    setWasGuessed(guessed.filter(sc => sc.value === card.value && sc.suit === card.suit).length > 0)
  }, [guessed])


  return (
    
    <div className={`text-sm md:text-base font-normal h-12 w-8 md:h-8 md:w-12 rounded-none justify-center ${wasGuessed ? isInPcHand ? 'bg-green-300' : 'bg-gray-400' : isShown ? 'bg-gray-400' : isSelected ? 'bg-green-100': 'bg-gray-100'}   border-white rounded-sm cursor-pointer flex items-center shadow-md relative`}>
      <div className="md:top-4 md:left-4 flex flex-row items-center gap-0 justify-between" onClick={() => handleSelectCard()}>
        <img src={`./${card.suit}.png`} className="w-3 h-3 md:w-4 md:h-4" />
        <p className="h-6 font-semibold">{`${card.value === 'T' ? '10': card.value}`}</p>
      </div>
    </div>    
  );
}
