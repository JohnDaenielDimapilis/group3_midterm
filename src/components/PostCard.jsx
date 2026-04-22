import { Link } from 'react-router-dom'
import { usePostEngagement } from '../hooks/usePostEngagement'
import {
  getAuthorName,
  getPostDisplayTitle,
  getPostTags,
  getPublishDate,
  getStoryPreview,
} from '../utils/postMeta'

function PostCard({ post }) {
  const tags = getPostTags(post)
  const { likes, commentsCount } = usePostEngagement(post.id)

  return (
    <article className="post-card">
      <div className="post-card-top">
        <div>
          <p className="card-date">{getPublishDate(post.id)}</p>
          <h2>{getPostDisplayTitle(post)}</h2>
        </div>
        <span className="post-id">#{post.id}</span>
      </div>

      <p>{getStoryPreview(post)}</p>

      <div className="card-footer">
        <p className="card-author">{getAuthorName(post.userId)}</p>
        <div className="tag-list">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="engagement-row">
        <span className="engagement-pill">{likes} likes</span>
        <span className="engagement-pill">{commentsCount} comments</span>
      </div>

      <Link className="card-link" to={`/item/${post.id}`}>
        View details
      </Link>
    </article>
  )
}

export default PostCard
