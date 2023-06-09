import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useSearch } from '../../Hooks/Search'

const Search = ({ setSearch, search }) => {
  const [searchFocus, setSearchFocus] = React.useState(false)

  return (
    <section className="search flex flex-col w-full md:h-[70vh] mb-12 items-center justify-center align-middle gap-16 ">
      <div className="flex flex-col items-center justify-center align-middle gap-2">
        <h1 className=" max-md:mt-52 max-sm:text-2xl text-4xl font-bold font-main">
          Trouvez un café proche de chez vous !
        </h1>
        <p className="max-sm:invisible text-lg font-main">Trouvez les cafés et restaurants ouvert prés de chez vous </p>
      </div>
      <div className="absolute top[10vh] left-60 blur-xl bg-emerald-50 w-[400px] h-96 rounded-full -z-30 opacity-60"></div>

      <div className=" flex flex-col items-center justify-center align-middle">
        <div className="relative ">
          <div>
            {!searchFocus && (
              <MagnifyingGlassIcon className="absolute top-1/2 transform -translate-y-1/2 h-7 w-7 left-3 font-main" />
            )}
          </div>
          <input
            type="text"
            className="md:w-[50vw] w-[80vw] h-12 border-b-2 border-grey-400 bg-transparent  
             pl-12 outline-none focus:border-b-emerald-500 ring-0 transition-all duration-300 ease-in-out"
            placeholder="Tunis, Sousse, Monastir..."
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  )
}

export default Search
