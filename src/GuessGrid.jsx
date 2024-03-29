import React, { useState, useEffect } from 'react'
import CardSmall from './CardSmall'

export default function GuessGrid({cards, round, tables, select, selectedCards, guessedCards, pcHand}) {

    const [shown, setShown] = useState([])

    const showCards = () => {
    let shownCards = []
        for (let i = 0; i < tables.length; i++) {
            if (i + 1> round) continue
            shownCards = [...shownCards, ...tables[i]]
        }
        setShown(shownCards)
    }

    // useEffect(() => {
    //     let shownCards = []
    //     for (let i = 0; i < tables.length; i++) {
    //         if (i + 1> round) continue
    //         shownCards = [...shownCards, ...tables[i]]
    //     }
    //     setShown(shownCards)
    // }, [])

    useEffect(() => showCards(), [tables, round]);

    return (
        <div className="flex justify-center">
        <div className='grid grid-cols-13 gap-1 gap-y-0 fixed bottom-0 mx-auto min-h-48'>
            {cards.map((c, idx) => {
                return (
                    <CardSmall card={c} key={idx} shownCards={shown} select={select} selectedCards={selectedCards} guessed={guessedCards} pcHand={pcHand}/>
                )
            }
            )}
        </div>
        </div>
    )
}
