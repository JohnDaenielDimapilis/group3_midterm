function SearchBar({ searchValue, onSearchChange, resultCount }) {
  return (
    <section className="controls-panel">
      <div>
        <p className="section-label">Explore</p>
        <h2>Search IT stories, tutorials, and updates</h2>
      </div>

      <div className="search-box">
        <label className="search-label" htmlFor="post-search">
          Search posts
        </label>
        <input
          id="post-search"
          name="post-search"
          type="text"
          placeholder="Search by title or description"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <p className="search-hint">{resultCount} posts found</p>
      </div>
    </section>
  )
}

export default SearchBar
