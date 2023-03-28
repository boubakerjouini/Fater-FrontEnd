// create a hook for search

// src/Hooks/Search.js
import React from 'react'

export const useSearch = ({ items }) => {
  const [search, setSearch] = React.useState(false)

  let newItems = items || []

  //search on title and location
  if (search) {
    newItems = items.filter(item => {
      const title = item.title.toLowerCase()
      const location = item.location.toLowerCase()
      const searchValue = search.toLowerCase()
      return title.includes(searchValue) || location.includes(searchValue)
    })
  }

  console.log(newItems)

  return { search, setSearch, newItems }
}
