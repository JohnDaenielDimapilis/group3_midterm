function SearchBar({ searchValue, onSearchChange, resultCount }) {
  return (
    <section className="controls-panel">
      <div>
        <p className="section-label">Search posts</p>
        <h2>Find a post by title or content</h2>
      </div>

      <div className="search-box">
        <label className="search-label" htmlFor="post-search">
          Search
        </label>
        <input
          id="post-search"
          name="post-search"
          type="text"
          placeholder="Type to filter posts..."
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <p className="search-hint">{resultCount} matching posts</p>
      </div>
    </section>
  )
}

export default SearchBar
