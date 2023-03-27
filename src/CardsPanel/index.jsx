import React from 'react'
import Card from '../Card'

const CardsPanel = () => {
  const items = [
    {
      id: 1,
      title: 'NYC Real Estate Expo',
      location: 'La Marsa, Tunis',
      time: '10:00 - 18:00',
      tags: ['Real Estate', 'Real Estate', 'Real Estate'],
    },
    {
      id: 2,
      title: 'NYC Real Estate Expo',
      location: 'La Marsa, Tunis',
      time: '10:00 - 18:00',
      tags: ['Real Estate', 'Real Estate', 'Real Estate'],
    },
    {
      id: 3,
      title: 'NYC Real Estate Expo',
      location: 'La Marsa, Tunis',
      time: '10:00 - 18:00',
      tags: ['Real Estate', 'Real Estate', 'Real Estate'],
    },
  ]
  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <div className=" justify-center gap-4 grid  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
        {items.map(item => (
          <Card item={item} />
        ))}
      </div>
    </div>
  )
}

export default CardsPanel
