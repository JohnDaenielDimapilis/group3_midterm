function Pagination({
  currentPage,
  totalPages,
  currentItemCount,
  totalItems,
  onPreviousPage,
  onNextPage,
}) {
  return (
    <div className="pagination-panel" aria-label="Pagination controls">
      <button
        className="pagination-button"
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        type="button"
      >
        Previous
      </button>
      <p className="pagination-status">
        Page <span>{currentPage}</span> of <span>{totalPages}</span>
        <br />
        <span className="pagination-count">
          Showing {currentItemCount} of {totalItems} posts
        </span>
      </p>
      <button
        className="pagination-button"
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        type="button"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
