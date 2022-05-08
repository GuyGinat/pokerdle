import React, { useState, useEffect } from 'react'
import CardGrid from './CardGrid';
import GuessTable from './GuessTable';
import PlayerHand from './PlayerHand';
import Ranker from 'handranker';
import GuessGrid from './GuessGrid';
import WinModal from './WinModal';
import InfoModal from './InfoModal';
import seed from 'seed-random'


const suits = ["hearts", "diamonds", "clubs", "spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

const App = () => {
  let date = new Date();
  date = 'd' + date.getDate() + 'y' + date.getFullYear + 'm' + date.getMonth;
  seed(date, { global: true });
  var numA = Math.random();
  seed(date, { global: true });
  var numB = Math.random();
  console.log(numA, numB)

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

  const [hasWon, setHasWon] = useState(false)
  const [showInfo, setShowInfo] = useState(true)
  const [selectedCards, setSelectedCards] = useState([{ suit: suits[0], value: values[0] }, { suit: suits[0], value: values[1] }])
  const [lastSelected, setlastSelected] = useState(1)

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

  const handleCardSelect = (card) => {
    let cs = [...selectedCards]
    let next = (lastSelected + 1) % 2
    cs[next] = card
    setlastSelected(next)
    setSelectedCards(cs)
  }

  const solve = (rowNumber) => {
    let d = [...dailyDeck]
    // let hand = new Hand();
    const table = d.splice((rowNumber - 1) * 5, 5).map(c => `${c.value}${c.suit}`.slice(0, 2))

    let ph = playerHand.map(c => `${c.value}${c.suit}`.slice(0, 2))
    let pch = pcHand.map(c => `${c.value}${c.suit}`.slice(0, 2))
    ph = [...ph, ...table]
    pch = [...pch, ...table]

    var hands = [{ id: 1, cards: ph }, { id: 2, cards: pch }]
    var results = Ranker.orderHands(hands);
    var isWinning = results[0].id === 1
    return isWinning
    // pch = [...pch, d.splice(rowNumber * 5, (rowNumber + 1) * 5 ).map(c => c.value.charAt[0] + c.suit.charAt[0])]

  }

  const isWinningHand = (handNumber) => {
    let t = tables[handNumber].map(c => `${c.value}${c.suit}`.slice(0, 2))
    let ph = playerHand.map(c => `${c.value}${c.suit}`.slice(0, 2))
    let pch = pcHand.map(c => `${c.value}${c.suit}`.slice(0, 2))
    ph = [...ph, ...t]
    pch = [...pch, ...t]

    let hands = [{ id: 1, cards: ph }, { id: 2, cards: pch }]
    let results = Ranker.orderHands(hands);
    console.log(results, handNumber)
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
      <CardGrid round={round} winStates={winStates} cards={tables} />
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
        <PlayerHand playerCards={selectedCards} />
      )
    }
  }

  const compareSelection = (hand1, hand2) => {
    let foundBoth = true
    hand1.forEach(c => {
      let foundCard = false;
      hand2.forEach(c2 => {
        if (c2.suit === c.suit && c2.value === c.value) foundCard = true;
      })
      if (!foundCard) foundBoth = false
    });
    return foundBoth
  }

  const handleSetRound = (nextRound) => {


    if (compareSelection(selectedCards, pcHand)) {
      console.log('Good')
      setHasWon(true)
      return
    } else {
      console.log('Bad')
    }
    if (nextRound > tables.length) return
    else setRound(nextRound)
  }

  return (
    <div className="font-bold text-2xl flex mt-40 flex-col h-full min-h-screen">
      <InfoModal open={showInfo} close={setShowInfo}/>
      <WinModal open={hasWon} hand={pcHand} round={round} />
      {/* <img src={`./${'deck'}.png`} alt="" srcset="" /> */}
      <div className='text-center pb-2 border-b-2 mx-0 fixed w-screen top-4 bg-white z-10'>
        Pokerdle
      </div>
      <div className='fixed z-10 right-2 top-4 w-8 h-8 cursor-pointer' onClick={() => setShowInfo(!showInfo)}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.5" cy="12.5" r="11.5" stroke="black" stroke-width="2" />
          <path d="M11.3068 14.847V14.7526C11.3134 14.1361 11.3748 13.6455 11.4908 13.281C11.6101 12.9164 11.7791 12.6214 11.9979 12.396C12.2166 12.1706 12.4801 11.9652 12.7884 11.7795C12.9872 11.6536 13.1662 11.5127 13.3253 11.357C13.4844 11.2012 13.6103 11.0222 13.7031 10.82C13.7959 10.6178 13.8423 10.3941 13.8423 10.1489C13.8423 9.85388 13.7727 9.59867 13.6335 9.38324C13.4943 9.1678 13.3087 9.00208 13.0767 8.88608C12.848 8.76676 12.5928 8.7071 12.3111 8.7071C12.0559 8.7071 11.8123 8.76013 11.5803 8.86619C11.3483 8.97225 11.156 9.13797 11.0036 9.36335C10.8511 9.58542 10.7633 9.87211 10.7401 10.2234H9.2287C9.2519 9.62685 9.4027 9.12306 9.68111 8.71207C9.95952 8.29777 10.3274 7.98456 10.7848 7.77244C11.2455 7.56032 11.7543 7.45426 12.3111 7.45426C12.9209 7.45426 13.4545 7.56861 13.9119 7.7973C14.3693 8.02268 14.724 8.3392 14.9759 8.74687C15.2311 9.15123 15.3587 9.62353 15.3587 10.1638C15.3587 10.535 15.3007 10.8697 15.1847 11.168C15.0687 11.463 14.9029 11.7265 14.6875 11.9585C14.4754 12.1905 14.2202 12.396 13.9219 12.575C13.6402 12.7507 13.4115 12.933 13.2358 13.1219C13.0634 13.3108 12.9375 13.5345 12.858 13.793C12.7784 14.0516 12.7353 14.3714 12.7287 14.7526V14.847H11.3068ZM12.0575 17.8697C11.7858 17.8697 11.5521 17.7736 11.3565 17.5814C11.161 17.3858 11.0632 17.1505 11.0632 16.8754C11.0632 16.6036 11.161 16.3716 11.3565 16.1794C11.5521 15.9839 11.7858 15.8861 12.0575 15.8861C12.326 15.8861 12.558 15.9839 12.7536 16.1794C12.9524 16.3716 13.0518 16.6036 13.0518 16.8754C13.0518 17.0577 13.0054 17.2251 12.9126 17.3776C12.8232 17.5267 12.7038 17.646 12.5547 17.7355C12.4055 17.825 12.2398 17.8697 12.0575 17.8697Z" fill="black" />
        </svg>
      </div>
      <div className='bg-white z-10'>
        <div className='flex flex-col justify-center fixed top-24 left-8'>
          <div className='text-sm'>Your Cards</div>
          <PlayerHandToShowToShow />
        </div>
        <div className='flex flex-col justify-center fixed top-24 right-8'>
          <div className='text-sm'>Your Guess</div>
          <PCHandToShowToShow />
        </div>
      </div>
      {/* <GuessTable selectedSuit={selectedSuit} selectedValue={selectedValue} setSelectedSuit={setSelectedSuit} setSelectedValue={setSelectedValue} />
      <GuessTable selectedSuit={selectedSuit2} selectedValue={selectedValue2} setSelectedSuit={setSelectedSuit2} setSelectedValue={setSelectedValue2} /> */}
      <div className='flex justify-center fixed bottom-52 right-6 text-sm'>
        <button className='bg-slate-200 rounded-md p-2' onClick={(e) => handleSetRound(round + 1)}>Guess</button>
      </div>
      <CardsToShow />
      {/* <div className='flex justify-center fixed bottom-10'>
        <button onClick={(e) => drawPlayerHand()}>Shuffle</button>
      </div> */}
      <GuessGrid cards={deck} round={round} tables={tables} select={handleCardSelect} selectedCards={selectedCards} />
    </div>
  );
};

export default App;
