import React from 'react'
import Tailwind from './Tailwind'
import { useParams } from 'react-router-dom'
const Test = () => {
    const {userid} =useParams()
  return (
    <div>
        <Tailwind />
      Welcome to test partamater is {userid}
    </div>
  )
}

export default Test
