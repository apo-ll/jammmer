import TrackList from './TrackList'

const SearchResult = ({ searchResults, onAdd }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Search Results
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <TrackList tracks={searchResults} onAdd={onAdd} />
      </div>
    </section>
  )
}

export default SearchResult
