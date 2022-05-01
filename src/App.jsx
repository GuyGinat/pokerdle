import React, { useState, useEffect } from 'react'
import CardGrid from './CardGrid';
import GuessTable from './GuessTable';
import PlayerHand from './PlayerHand';

const suits = ["hearts", "diamonds", "clubs", "spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

const NUM_CARDS_IN_DECK = 52;
const NUM_VALUES_IN_DECK = 13;
const NUM_SUITS_IN_DECK = 4;
const NUM_CARDS_IN_HAND = 5;
const ACE_VALUE = Math.pow(2, 13);
const STRAIGHT_LOW_ACE_INDICATOR = parseInt("10000000011110", 2);
const TEN_CARD_POSITION = 8;
const RANK_BASE_VALUE = Math.pow(10, 9);

const App = () => {

  const [deck, setDeck] = useState([
    {
      "suit": "hearts",
      "value": 2
    },
    {
      "suit": "hearts",
      "value": 3
    },
    {
      "suit": "hearts",
      "value": 4
    },
    {
      "suit": "hearts",
      "value": 5
    },
    {
      "suit": "hearts",
      "value": 6
    },
    {
      "suit": "hearts",
      "value": 7
    },
    {
      "suit": "hearts",
      "value": 8
    },
    {
      "suit": "hearts",
      "value": 9
    },
    {
      "suit": "hearts",
      "value": 10
    },
    {
      "suit": "hearts",
      "value": "J"
    },
    {
      "suit": "hearts",
      "value": "Q"
    },
    {
      "suit": "hearts",
      "value": "K"
    },
    {
      "suit": "hearts",
      "value": "A"
    },
    {
      "suit": "diamonds",
      "value": 2
    },
    {
      "suit": "diamonds",
      "value": 3
    },
    {
      "suit": "diamonds",
      "value": 4
    },
    {
      "suit": "diamonds",
      "value": 5
    },
    {
      "suit": "diamonds",
      "value": 6
    },
    {
      "suit": "diamonds",
      "value": 7
    },
    {
      "suit": "diamonds",
      "value": 8
    },
    {
      "suit": "diamonds",
      "value": 9
    },
    {
      "suit": "diamonds",
      "value": 10
    },
    {
      "suit": "diamonds",
      "value": "J"
    },
    {
      "suit": "diamonds",
      "value": "Q"
    },
    {
      "suit": "diamonds",
      "value": "K"
    },
    {
      "suit": "diamonds",
      "value": "A"
    },
    {
      "suit": "clubs",
      "value": 2
    },
    {
      "suit": "clubs",
      "value": 3
    },
    {
      "suit": "clubs",
      "value": 4
    },
    {
      "suit": "clubs",
      "value": 5
    },
    {
      "suit": "clubs",
      "value": 6
    },
    {
      "suit": "clubs",
      "value": 7
    },
    {
      "suit": "clubs",
      "value": 8
    },
    {
      "suit": "clubs",
      "value": 9
    },
    {
      "suit": "clubs",
      "value": 10
    },
    {
      "suit": "clubs",
      "value": "J"
    },
    {
      "suit": "clubs",
      "value": "Q"
    },
    {
      "suit": "clubs",
      "value": "K"
    },
    {
      "suit": "clubs",
      "value": "A"
    },
    {
      "suit": "spades",
      "value": 2
    },
    {
      "suit": "spades",
      "value": 3
    },
    {
      "suit": "spades",
      "value": 4
    },
    {
      "suit": "spades",
      "value": 5
    },
    {
      "suit": "spades",
      "value": 6
    },
    {
      "suit": "spades",
      "value": 7
    },
    {
      "suit": "spades",
      "value": 8
    },
    {
      "suit": "spades",
      "value": 9
    },
    {
      "suit": "spades",
      "value": 10
    },
    {
      "suit": "spades",
      "value": "J"
    },
    {
      "suit": "spades",
      "value": "Q"
    },
    {
      "suit": "spades",
      "value": "K"
    },
    {
      "suit": "spades",
      "value": "A"
    }
  ])
  const [dailyDeck, setDailyDeck] = useState([
    {
      "suit": "hearts",
      "value": 2
    },
    {
      "suit": "hearts",
      "value": 3
    },
    {
      "suit": "hearts",
      "value": 4
    },
    {
      "suit": "hearts",
      "value": 5
    },
    {
      "suit": "hearts",
      "value": 6
    },
    {
      "suit": "hearts",
      "value": 7
    },
    {
      "suit": "hearts",
      "value": 8
    },
    {
      "suit": "hearts",
      "value": 9
    },
    {
      "suit": "hearts",
      "value": 10
    },
    {
      "suit": "hearts",
      "value": "J"
    },
    {
      "suit": "hearts",
      "value": "Q"
    },
    {
      "suit": "hearts",
      "value": "K"
    },
    {
      "suit": "hearts",
      "value": "A"
    },
    {
      "suit": "diamonds",
      "value": 2
    },
    {
      "suit": "diamonds",
      "value": 3
    },
    {
      "suit": "diamonds",
      "value": 4
    },
    {
      "suit": "diamonds",
      "value": 5
    },
    {
      "suit": "diamonds",
      "value": 6
    },
    {
      "suit": "diamonds",
      "value": 7
    },
    {
      "suit": "diamonds",
      "value": 8
    },
    {
      "suit": "diamonds",
      "value": 9
    },
    {
      "suit": "diamonds",
      "value": 10
    },
    {
      "suit": "diamonds",
      "value": "J"
    },
    {
      "suit": "diamonds",
      "value": "Q"
    },
    {
      "suit": "diamonds",
      "value": "K"
    },
    {
      "suit": "diamonds",
      "value": "A"
    },
    {
      "suit": "clubs",
      "value": 2
    },
    {
      "suit": "clubs",
      "value": 3
    },
    {
      "suit": "clubs",
      "value": 4
    },
    {
      "suit": "clubs",
      "value": 5
    },
    {
      "suit": "clubs",
      "value": 6
    },
    {
      "suit": "clubs",
      "value": 7
    },
    {
      "suit": "clubs",
      "value": 8
    },
    {
      "suit": "clubs",
      "value": 9
    },
    {
      "suit": "clubs",
      "value": 10
    },
    {
      "suit": "clubs",
      "value": "J"
    },
    {
      "suit": "clubs",
      "value": "Q"
    },
    {
      "suit": "clubs",
      "value": "K"
    },
    {
      "suit": "clubs",
      "value": "A"
    },
    {
      "suit": "spades",
      "value": 2
    },
    {
      "suit": "spades",
      "value": 3
    },
    {
      "suit": "spades",
      "value": 4
    },
    {
      "suit": "spades",
      "value": 5
    },
    {
      "suit": "spades",
      "value": 6
    },
    {
      "suit": "spades",
      "value": 7
    },
    {
      "suit": "spades",
      "value": 8
    },
    {
      "suit": "spades",
      "value": 9
    },
    {
      "suit": "spades",
      "value": 10
    },
    {
      "suit": "spades",
      "value": "J"
    },
    {
      "suit": "spades",
      "value": "Q"
    },
    {
      "suit": "spades",
      "value": "K"
    },
    {
      "suit": "spades",
      "value": "A"
    }
  ])
  const [round, setRound] = useState(1)
  const [guesses, setGuesses] = useState(3)
  const [playerHand, setPlayerHand] = useState([])
  const [pcHand, setPcHand] = useState([])

  const [selectedSuit, setSelectedSuit] = useState(suits[0])
  const [selectedValue, setSelectedValue] = useState(values[0])

  const shuffle = (originalArray) => {    
      const array = [...originalArray]
      let currentIndex = originalArray.length,  randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      setDailyDeck(array)
  }

  const buildDeck = () => {
    let deck = Array.from(new Array(NUM_CARDS_IN_DECK), (_, index) => index);
    let count = NUM_CARDS_IN_DECK + 1;
    while ((count -= 1)) {
      deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
    }
    return deck;
  };
  
  const rankHand = (hand) => {
    const suits = new Array(NUM_SUITS_IN_DECK).fill(0);
    const values = new Array(NUM_VALUES_IN_DECK).fill(0);
    hand.forEach((card) => {
      suits[Math.floor(card / NUM_VALUES_IN_DECK)] += 1;
      values[card % NUM_VALUES_IN_DECK] += 1;
    });
    let rankValue = values.reduce(
      (total, val, index) =>
        (total +=
          ((val === 1 && Math.pow(2, index + 1)) || 0) +
          ((val > 1 && Math.pow(2, index + 1) * ACE_VALUE * val) || 0)),
      0
    );
    const firstCardIndex = values.findIndex((index) => index === 1);
    const ranks = {
      royal_flush: false,
      straight_flush: false,
      quads: values.some((count) => count === 4),
      full_house: values.filter(Boolean).length === 2,
      flush: suits.some((count) => count === NUM_CARDS_IN_HAND),
      straight:
        values
          .slice(firstCardIndex, firstCardIndex + NUM_CARDS_IN_HAND)
          .filter((count) => count === 1).length === 5 ||
        rankValue === STRAIGHT_LOW_ACE_INDICATOR,
      trips: values.some((count) => count === 3),
      two_pairs: values.filter((count) => count === 2).length === 2,
      pair: values.filter((count) => count === 2).length === 1,
      high_card: true,
    };
    ranks.straight_flush = ranks.flush && ranks.straight;
    ranks.royal_flush =
      ranks.straight_flush && firstCardIndex === TEN_CARD_POSITION;
    let rankIndex = 0;
    let rankDescription = "";
    Object.keys(ranks).every((key, index) => {
      rankIndex = 10 - index;
      rankDescription = key;
      return !ranks[key];
    });
    rankValue +=
      rankIndex * RANK_BASE_VALUE -
      ((rankValue === STRAIGHT_LOW_ACE_INDICATOR && ACE_VALUE - 1) || 0);
    rankDescription = rankDescription
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return {
      hand,
      suits,
      values,
      rankValue,
      ranks,
      rankDescription,
      display: handDisplay(hand),
    };
  };

  const compareHands = (hands) => {
    return hands
      .map((hand) => rankHand(hand))
      .sort((handA, handB) => handB.rankValue - handA.rankValue);
  };

  useEffect(() => {    
      drawPlayerHand(); 
      // shuffle(deck);      
      // setCurrentShown(...deck.splice(5))
  }, [])

  const guess = (guessCards) => {

  }

  const solve = (rowNumber) => {
    let d = [...dailyDeck]
    // let hand = new Hand();
    let ph = playerHand.map(c => {
      return `${c.value}${c.suit}`.slice(0, 2)
    })
    ph = [...ph, d.splice((rowNumber - 1) * 5, (rowNumber) * 5 ).map(c => c.value.charAt[0] + c.suit.charAt[0])]
    let pch = pcHand.map(c => {
      return `${c.value}${c.suit}`.slice(0, 2)
    })
    pch = [...pch, d.splice(rowNumber * 5, (rowNumber + 1) * 5 ).map(c => c.value.charAt[0] + c.suit.charAt[0])]
    // let hand1 = hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3c', 'Kd']);
    // var hand2 = hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
    // console.log('Player hand ' + ph)
    // console.log('PC hand ' + pch)
    // let winner = hand.winners([ph, pch]); // hand2
  }

  const drawPlayerHand = () => {
    shuffle(deck);
    const d = dailyDeck;
    setPlayerHand([d[0], d[1]])
    setPcHand([d[2], d[3]])

    // setDailyDeck([...d.slice(4)])
    // console.log(d.length)
  }

  function CardsToShow() {
    return (
      <CardGrid cards={dailyDeck} round={round} winning={solve}/>
    )
  }  

  function PlayerHandToShowToShow() {
    return (
      <PlayerHand playerCards={playerHand} />
    )
  }  

  return (
    <div className="font-bold text-4xl m-[2em] flex justify-center flex-col">      
      Pokerdle
      <div className='flex flex-row justify-center'>
        {/* <PlayerHandToShowToShow/>       */}
      </div>
      
      <GuessTable selectedSuit={selectedSuit} selectedValue={selectedValue} setSelectedSuit={setSelectedSuit} setSelectedValue={setSelectedValue}/>      
      <div className='flex justify-center fixed bottom-10 right-10'>
        <button onClick={(e) => setRound(round+1)}>Draw Table</button>
      </div>
      <CardsToShow/>
      <div className='flex justify-center fixed bottom-10'>
        <button onClick={(e) => drawPlayerHand()}>Shuffle</button>
      </div>
    </div>
  );
};

export default App;
