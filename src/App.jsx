import React from 'react'
import CardsPanel from './Components/CardsPanel'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Search from './Components/Search'
import { useSearch } from './Hooks/Search'

export function App() {
  const items = [
    {
      id: 1,
      title: 'Tunis City',
      location: 'La Marsa, Tunis',
      time: '10:00 - 18:00',
      img: ' https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      tags: ['Real Estate', 'Real Estate', 'Real Estate'],
    },
    {
      id: 2,
      title: 'NYC ',
      location: 'La Marsa, Tunis',
      time: '10:00 - 18:00',
      img: ' https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      tags: ['Real Estate', 'Real Estate', 'Real Estate'],
    },
    {
      id: 3,
      title: 'Sousse',
      location: 'La Marsa, Tunis',
      time: '10:00 - 18:00',
      img: ' https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      tags: ['Real Estate', 'Real Estate', 'Real Estate'],
    },
  ]
  const { search, setSearch, newItems } = useSearch({ items })

  return (
    <main>
      <Header />

      <Search search={search} setSearch={setSearch} />
      <CardsPanel items={newItems} />

      <Footer />
    </main>
  )
}

export default App
