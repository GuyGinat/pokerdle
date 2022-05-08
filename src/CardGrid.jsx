import React, {useState, useEffect} from 'react'

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
                    <div key={idx} className='grid grid-cols-6  -mb-12'>
                        <div className={`flex justify-center items-center ${winStates[idx] ? 'text-green-100': 'text-red-100'}`}>
                            {winStates[idx] ? 'V' : 'X'}
                        </div>
                        {r.map((c, idx) => {
                            return (                        
                                    <div 
                                        key={c.value+c.suit} 
                                        className='text-xs md:text-base font-normal h-20 w-12 md:h-44 md:w-24 border-t-2 border-yellow-50 rounded-lg bg-yellow-100 flex justify-center items-center shadow-md'>
                                        
                                        <p className='h-6'>{c.value} {c.suit}</p>                    
                                    </div>
                            )
                        })}        
                    </div>
                    )
                }
            })}
      </div>

  )
}
