import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import FeedbackMessage from '../components/FeedbackMessage'
import { useGetPostByIdQuery } from '../features/posts/postsApi'
import { usePostEngagement } from '../hooks/usePostEngagement'
import {
  getAuthorName,
  getPostDisplayTitle,
  getPostStory,
  getPostTags,
  getPublishDate,
} from '../utils/postMeta'

function PostDetailPage() {
  const { id } = useParams()
  const { data: post, error, isError, isLoading } = useGetPostByIdQuery(id)
  const [commentValue, setCommentValue] = useState('')
  const [commentMessage, setCommentMessage] = useState('')
  const { liked, likes, comments, commentsCount, toggleLike, addComment } =
    usePostEngagement(id)

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

  const handleCommentSubmit = (event) => {
    event.preventDefault()

    const wasAdded = addComment(commentValue)

    if (!wasAdded) {
      setCommentMessage('Please write a comment before submitting.')
      return
    }

    setCommentValue('')
    setCommentMessage('Comment added successfully.')
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
        <h1>{getPostDisplayTitle(post)}</h1>
        <div className="tag-list">
          {getPostTags(post).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
        <div className="story-block">
          {getPostStory(post).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="interaction-bar">
          <button
            className={liked ? 'like-button like-button-active' : 'like-button'}
            onClick={toggleLike}
            type="button"
          >
            {liked ? 'Liked' : 'Like'} · {likes}
          </button>
          <span className="interaction-meta">{commentsCount} comments</span>
        </div>
      </article>

      <section className="comment-card">
        <div className="comment-header">
          <div>
            <p className="section-label">Conversation</p>
            <h2>Comments</h2>
          </div>
        </div>

        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <label className="form-field" htmlFor="comment">
            Add a comment
            <textarea
              id="comment"
              name="comment"
              placeholder="Share your thoughts about this post"
              rows="4"
              value={commentValue}
              onChange={(event) => setCommentValue(event.target.value)}
            />
          </label>
          <button className="primary-button" type="submit">
            Post Comment
          </button>
          {commentMessage ? (
            <p className="form-success" aria-live="polite">
              {commentMessage}
            </p>
          ) : null}
        </form>

        <div className="comment-list">
          {comments.map((comment) => (
            <article key={comment.id} className="comment-item">
              <div className="comment-meta">
                <strong>{comment.author}</strong>
                <span>{comment.createdAt}</span>
              </div>
              <p>{comment.content}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default PostDetailPage
