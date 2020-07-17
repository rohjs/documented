import React, { useState, useEffect } from 'react'

const Perks = (): JSX.Element => {
  const PERKS = [
    'A Seoul based user interface & frontend developer',
    'I build digital products with 🔥',
    'Hit me up with email'
  ]
  const [perk, setPerk] = useState<number>(0)

  const tick = () => {
    const newPerk = perk === PERKS.length - 1 ? 0 : perk + 1
    setPerk(newPerk)
  }

  useEffect(() => {
    const interval = setInterval(() => tick(), 3000)
    return clearInterval(interval)
  }, [])

  return <p className='perks'>{PERKS[perk]}</p>
}

export default Perks
