'use'

import { useCallback } from 'react'

import { Input } from '@/components/ui/input'

import TrackList from './TrackList'

const Playlist = ({ searchPlaylist, onNameChange, onRemove }) => {
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value)
    },
    [onNameChange]
  )
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Playlist
      </h2>
      <form className="mb-4">
        <Input
          className="w-full bg-white shadow-none appearance-none pl-4 pr-10 py-2 rounded-lg text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          defaultValue={'Rename Playlist'}
          placeholder="Enter playlist Name"
          onChange={handleNameChange}
          type="text"
        />
      </form>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <TrackList
          tracks={searchPlaylist}
          isRemoval={true}
          onRemove={onRemove}
        />
      </div>
    </section>
  )
}

export default Playlist
