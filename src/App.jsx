import React from 'react'
import CardsPanel from './CardsPanel'
import Footer from './Footer'
import Header from './Header'
import Search from './Search'
export function App() {
  return (
    <main>
      <Header />

      <Search />
      <CardsPanel />

      <Footer />
    </main>
  )
}

export default App
