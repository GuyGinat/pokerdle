import React from 'react'

export default function Card({card}) {
  return (
    <div className={`bg-[url('./${card.value}${card.suit.charAt(0)}')]`} />
  )
}
