import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-card-top">
        <span className="post-meta">Post #{post.id}</span>
        <span className="post-meta">Author {post.userId}</span>
      </div>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link className="card-link" to={`/item/${post.id}`}>
        View details
      </Link>
    </article>
  )
}

export default PostCard
