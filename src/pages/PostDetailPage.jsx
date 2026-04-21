import { Link, useParams } from 'react-router-dom'
import FeedbackMessage from '../components/FeedbackMessage'
import { useGetPostByIdQuery } from '../features/posts/postsApi'
import { getAuthorName, getPostTags, getPublishDate } from '../utils/postMeta'

function PostDetailPage() {
  const { id } = useParams()
  const { data: post, error, isError, isLoading } = useGetPostByIdQuery(id)

  if (isLoading) {
    return (
      <FeedbackMessage
        title="Loading post details..."
        message="Please wait while the selected post is fetched."
      />
    )
  }

  if (isError) {
    return (
      <FeedbackMessage
        title="Unable to load this post"
        message={
          error?.status
            ? `The post could not be loaded because the server returned ${error.status}.`
            : 'The request failed before a response was received.'
        }
        tone="error"
      />
    )
  }

  if (!post?.id) {
    return (
      <FeedbackMessage
        title="Post not found"
        message="The selected post could not be found. Please return to the home page and choose another item."
      />
    )
  }

  return (
    <section className="detail-page">
      <div className="detail-actions">
        <Link className="back-link" to="/">
          Back to posts
        </Link>
      </div>

      <article className="detail-card">
        <div className="detail-badges">
          <span className="post-meta">{getPublishDate(post.id)}</span>
          <span className="post-meta">{getAuthorName(post.userId)}</span>
        </div>
        <h1>{post.title}</h1>
        <div className="tag-list">
          {getPostTags(post).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
        <p>{post.body}</p>
      </article>
    </section>
  )
}

export default PostDetailPage
