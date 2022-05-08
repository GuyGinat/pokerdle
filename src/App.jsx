import React, { useState, useEffect } from 'react'
import CardGrid from './CardGrid';
import GuessTable from './GuessTable';
import PlayerHand from './PlayerHand';
import Ranker from 'handranker';

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
      "value": "T"
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
      "value": "T"
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
      "value": "T"
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
      "value": "T"
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
      "value": "T"
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
      "value": "T"
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
      "value": "T"
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
      "value": "T"
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
  const [winStates, setWinStates] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [playerHand, setPlayerHand] = useState([])
  const [pcHand, setPcHand] = useState([])
  const [tables, setTables] = useState([])

  const [selectedSuit, setSelectedSuit] = useState(suits[0])
  const [selectedValue, setSelectedValue] = useState(values[0])
  const [selectedSuit2, setSelectedSuit2] = useState(suits[0])
  const [selectedValue2, setSelectedValue2] = useState(values[0])

  const shuffle = (originalArray) => {
    const array = [...originalArray]
    let currentIndex = originalArray.length, randomIndex;
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
    shuffle(deck)    
  }, [])

  useEffect(() => {
    drawPlayerHand();    
  }, [dailyDeck])

  const solve = (rowNumber) => {
    let d = [...dailyDeck]
    // let hand = new Hand();
    const table = d.splice((rowNumber - 1) * 5, 5).map(c => `${c.value}${c.suit}`.slice(0, 2))

    let ph = playerHand.map(c => `${c.value}${c.suit}`.slice(0, 2))
    let pch = pcHand.map(c => `${c.value}${c.suit}`.slice(0, 2))
    ph = [...ph, ...table]
    pch = [...pch, ...table]
    
    var hands = [{id: 1, cards: ph},{id: 2, cards: pch}]
    var results = Ranker.orderHands(hands);
    var isWinning = results[0].id === 1
    console.log(results, isWinning)
    return isWinning
    // pch = [...pch, d.splice(rowNumber * 5, (rowNumber + 1) * 5 ).map(c => c.value.charAt[0] + c.suit.charAt[0])]

  }

  const isWinningHand = (handNumber) => {
    let t = tables[handNumber].map(c => `${c.value}${c.suit}`.slice(0, 2))
    let ph = playerHand.map(c => `${c.value}${c.suit}`.slice(0, 2))
    let pch = pcHand.map(c => `${c.value}${c.suit}`.slice(0, 2))
    ph = [...ph, ...t]
    pch = [...pch, ...t]

    let hands = [{id: 1, cards: ph},{id: 2, cards: pch}]
    let results = Ranker.orderHands(hands);
    console.log(results[0][0].id)
    return results[0][0].id === 1
  }

  const drawPlayerHand = () => {
    // shuffle(deck);
    const d = dailyDeck;
    setPlayerHand([d[0], d[1]])
    setPcHand([d[2], d[3]])
    setTables([
      [d[4], d[5], d[6], d[7], d[8]],
      [d[9], d[10], d[11], d[12], d[13]],
      [d[14], d[15], d[16], d[17], d[18]],
      [d[19], d[20], d[21], d[22], d[23]],
      [d[24], d[25], d[26], d[27], d[28]],
      [d[29], d[30], d[31], d[32], d[33]],
      [d[34], d[35], d[36], d[37], d[38]],
      [d[39], d[40], d[41], d[42], d[43]],
      [d[44], d[45], d[46], d[47], d[48]],
    ])    
  }

  useEffect(() => {
    if (tables.length === 0) return
    let states = []
    for (let i = 0; i < tables.length; i++) {
      states.push(isWinningHand(i))
    }

    setWinStates([...states])
  }, [tables]);

  function CardsToShow() {
    
    return (
      <CardGrid round={round} winStates={winStates} cards={tables}/>
    )
  }

  function PlayerHandToShowToShow() {
    if (playerHand.length === 0) {
      return (<></>)
    } else {
      return (
        <PlayerHand playerCards={playerHand} />
        )
    }
  }

  function PCHandToShowToShow() {
    if (pcHand.length === 0) {
      return (<></>)
    } else {
      return (
        <PlayerHand playerCards={pcHand} />
        )
    }
  }

  const handleSetRound = (nextRound) => {
    if (nextRound > tables.length) return
    else setRound(nextRound)
  }

  return (
    <div className="font-bold text-4xl mt-24 flex justify-center flex-col">
      <div className='text-center pb-2 border-b-2 mx-0 fixed w-screen top-4 bg-white'>
        Pokerdle
      </div>
      <div className='flex flex-row justify-center fixed top-48 left-8'>
        <PlayerHandToShowToShow/>      
      </div>
      <div className='flex flex-row justify-center fixed top-48 right-8'>
        <PCHandToShowToShow/>      
      </div>
      <GuessTable selectedSuit={selectedSuit} selectedValue={selectedValue} setSelectedSuit={setSelectedSuit} setSelectedValue={setSelectedValue} />
      <GuessTable selectedSuit={selectedSuit2} selectedValue={selectedValue2} setSelectedSuit={setSelectedSuit2} setSelectedValue={setSelectedValue2} />
      <div className='flex justify-center fixed bottom-10 right-10'>
        <button onClick={(e) => handleSetRound(round + 1)}>Draw Table</button>
      </div>
      <CardsToShow />
      <div className='flex justify-center fixed bottom-10'>
        <button onClick={(e) => drawPlayerHand()}>Shuffle</button>
      </div>
    </div>
  );
};

export default App;
