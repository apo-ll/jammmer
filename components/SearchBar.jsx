'use client'

import { useState, useCallback } from 'react'

import { Input } from './ui/input'
import { Button } from './ui/button'

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('')

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value)
  }, [])

  const search = useCallback(() => {
    onSearch(term)
  }, [onSearch, term])

  return (
    <div className="mt-8 flex gap-3 justify-between">
      <Input
        className="w-4/5 bg-white shadow-none appearance-none pl-4 pr-10 py-2 rounded-lg text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100"
        placeholder="Search song, artist or genre..."
        type="text"
        onChabge={handleTermChange}
      />
      <Button className="sm:w-1/5" onClick={search}>
        Search
      </Button>
    </div>
  )
}

export default SearchBar
