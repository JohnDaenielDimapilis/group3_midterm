import { useMemo, useState } from 'react'
import FeedbackMessage from '../components/FeedbackMessage'
import Pagination from '../components/Pagination'
import PostCard from '../components/PostCard'
import SearchBar from '../components/SearchBar'
import { POSTS_PER_PAGE } from '../data/constants'
import { useGetPostsQuery } from '../features/posts/postsApi'

function HomePage() {
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { data: posts = [], error, isError, isLoading, isFetching } =
    useGetPostsQuery()

  const filteredPosts = useMemo(() => {
    // Keep filtering derived from the fetched list so UI state stays simple.
    const normalizedSearch = searchValue.trim().toLowerCase()

    if (!normalizedSearch) {
      return posts
    }

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(normalizedSearch) ||
        post.body.toLowerCase().includes(normalizedSearch),
    )
  }, [posts, searchValue])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  // JSONPlaceholder does not expose paged results, so we paginate client-side.
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  )

  const handleSearchChange = (value) => {
    setSearchValue(value)
    setCurrentPage(1)
  }

  const handlePreviousPage = () => {
    setCurrentPage((previousPage) => Math.max(previousPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((previousPage) =>
      Math.min(previousPage + 1, totalPages),
    )
  }

  if (isLoading) {
    return (
      <FeedbackMessage
        title="Loading posts..."
        message="Please wait while we fetch the latest post collection."
      />
    )
  }

  if (isError) {
    return (
      <FeedbackMessage
        title="Unable to load posts"
        message={
          error?.status
            ? `The server returned an error (${error.status}). Please try again later.`
            : 'A network error occurred while loading the posts.'
        }
        tone="error"
      />
    )
  }

  return (
    <section className="home-page">
      <section className="hero-panel">
        <div>
          <p className="section-label">RTK Query + React Router</p>
          <h1>Browse public posts with fast filtering and clear navigation</h1>
        </div>
        <p className="hero-copy">
          This midterm project uses Redux Toolkit Query to fetch a list of posts
          and individual post details from JSONPlaceholder.
        </p>
      </section>

      <SearchBar
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        resultCount={filteredPosts.length}
      />

      <div className="results-header">
        <p>
          Showing <span>{paginatedPosts.length}</span> of{' '}
          <span>{filteredPosts.length}</span> filtered posts
        </p>
        {isFetching && <span className="refresh-pill">Refreshing data...</span>}
      </div>

      {filteredPosts.length === 0 ? (
        <FeedbackMessage
          title="No posts found"
          message="Try another keyword. Search checks both the post title and body without case sensitivity."
        />
      ) : (
        <>
          <section className="post-grid">
            {paginatedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            currentItemCount={paginatedPosts.length}
            totalItems={filteredPosts.length}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
        </>
      )}
    </section>
  )
}

export default HomePage
