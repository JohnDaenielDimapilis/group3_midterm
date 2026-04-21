function Pagination({
  currentPage,
  totalPages,
  currentItemCount,
  totalItems,
  onSelectPage,
  onPreviousPage,
  onNextPage,
}) {
  const pageNumbers = getVisiblePageNumbers(currentPage, totalPages)

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
      <div className="pagination-center">
        <p className="pagination-status">
          Page <span>{currentPage}</span> of <span>{totalPages}</span>
          <br />
          <span className="pagination-count">
            Showing {currentItemCount} of {totalItems} posts
          </span>
        </p>
        <div className="page-number-list" aria-label="Page numbers">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={
                pageNumber === currentPage
                  ? 'page-number-button page-number-button-active'
                  : 'page-number-button'
              }
              onClick={() => onSelectPage(pageNumber)}
              type="button"
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
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

function getVisiblePageNumbers(currentPage, totalPages) {
  const windowSize = 5
  const halfWindow = Math.floor(windowSize / 2)
  let startPage = Math.max(1, currentPage - halfWindow)
  let endPage = Math.min(totalPages, startPage + windowSize - 1)

  if (endPage - startPage + 1 < windowSize) {
    startPage = Math.max(1, endPage - windowSize + 1)
  }

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  )
}
