import React, { useState, useEffect } from 'react'
import CardGrid from './CardGrid';
import GuessTable from './GuessTable';
import PlayerHand from './PlayerHand';
import Hand from 'pokersolver';

const suits = ["hearts", "diamonds", "clubs", "spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

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

  useEffect(() => {    
      drawPlayerHand(); 
      // shuffle(deck);      
      // setCurrentShown(...deck.splice(5))
  }, [])

  const guess = (guessCards) => {

  }

  const solve = (rowNumber) => {
    let ph = playerHand.map(c => c.value.charAt[0] + c.suit.charAt[0])
    ph = [...ph, dailyDeck.split(rowNumber * 5, (rowNumber + 1) * 5 ).map(c => c.value.charAt[0] + c.suit.charAt[0])]
    let pch = playerHand.map(c => c.value.charAt[0] + c.suit.charAt[0])
    pch = [...pch, dailyDeck.split(rowNumber * 5, (rowNumber + 1) * 5 ).map(c => c.value.charAt[0] + c.suit.charAt[0])]
    // let hand1 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3c', 'Kd']);
    // var hand2 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
    console.log('Player hand ' +ph)
    console.log('PC hand ' + pch)
    let winner = Hand.winners([ph, pch]); // hand2
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
