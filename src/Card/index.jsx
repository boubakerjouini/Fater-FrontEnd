import React from 'react'

const Card = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center align-middle gap-2 lg:h-72 h-80 shadow-md mb-5 lg:w-72 w-56 hover:bg-slate-50 hover:cursor-pointer">
      <div className=" w-full h-full ">
        <img
          className="  w-72 h-40 object-cover rounded-t-lg top-0 left-0 "
          alt="café"
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
      </div>

      <div className="px-2  w-full h-full ">
        <h1 className="text-2xl font-bold font-main justify-start ">{item.title ? item.title : 'No Name'} </h1>
        {/* add localisation */}
        <p className="text-sm font-main justify-start">{item.location ? item.location : 'No Location'}</p>
        {/* opening time */}
        <p className="text-sm font-main justify-start">{item.time ? item.time : 'Unkown Time'}</p>
        {/* add chips */}
        <div className="flex flex-row justify-start gap-2 py-2">
          {item.tags.map(tag => (
            <div className="bg-slate-100 rounded-full px-2 py-1 text-xs font-main">{tag ? tag : 'Unkown Tag'}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
