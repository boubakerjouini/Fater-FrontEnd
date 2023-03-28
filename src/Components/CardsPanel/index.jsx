import React from 'react'
import Card from '../Card'

const CardsPanel = ({ items }) => {
  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <div className=" justify-center gap-4 grid  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
        {items.map(item => (
          <div key={item.id} className="animate-fade-in duration-75">
            <Card item={item} />
          </div>
        ))}
      </div>
      {items.length === 0 && (
        <div className="flex flex-col justify-center align-middle items-center w-full ">
          <h1 className="text-2xl font-bold font-main ">No Results 😔</h1>
          <p className="text-sm font-main ">Try to change your search</p>
        </div>
      )}
    </div>
  )
}

export default CardsPanel
