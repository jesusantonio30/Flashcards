import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCard } from './cardsSlice';

const Card = ({ id }) => {
    const card = useSelector(selectCard(id));
    const [flipped, setFlipped] = useState(false);

  return (
    <li>
        <button className='card' onClick={(e) => setFlipped(!flipped)}>
            {flipped ? card.back : card.front}
        </button>
    </li>
  )
}

export default Card
