import React, {useState, useEffect} from 'react'
import Card from './Card'

export default function CardGrid({cards, round, winStates}) {

    const [rows, setRows] = useState([])
    useEffect(() => {
        setRows(cards)
    }, [round])

  return (    
      <div className=' max-w-8/12 mx-auto flex flex-col mt-8'>
            {rows.map((r, idx) => {
                if (idx >= round) return (<></>)
                else {
                    return (
                    <div key={idx} className='grid grid-cols-6 md:-mb-6'>
                        <div className={`flex justify-center items-center ${winStates[idx] ? 'text-green-300': 'text-red-300'}`}>
                            {winStates[idx] ? 'V' : 'X'}
                        </div>
                        {r.map((c, idx) => {
                            return (                        
                                    <Card card={c} key={idx}/>
                            )
                        })}        
                    </div>
                    )
                }
            })}
      </div>

  )
}
