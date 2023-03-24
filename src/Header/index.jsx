import React from 'react'

const Header = () => {
  return (
    <header className="fixed flex flex-row justify-between px-4 pt-2 w-full font-main bg-white pb-6 z-50">
      <h1 className="text-2xl ">Fater</h1>
      <nav className="flex flex-row gap-4">
        <a href="#" className="text-xl  underline-offset-2 border-b-2 border-emerald-500 ">
          Home
        </a>
        <a href="#" className="text-xl ">
          About
        </a>
      </nav>
    </header>
  )
}

export default Header
