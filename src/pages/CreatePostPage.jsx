import { useState } from 'react'

function CreatePostPage() {
  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
    tags: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
    setIsSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="create-page">
      <section className="page-intro">
        <p className="section-label">Create Post</p>
        <h1>Draft a new PostIT story</h1>
        <p className="intro-copy">
          Use this form to sketch a new IT vlog post layout with a title,
          content summary, and tags.
        </p>
      </section>

      <form className="create-form" onSubmit={handleSubmit}>
        <label className="form-field" htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter your post title"
            value={formValues.title}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-field" htmlFor="content">
          Content
          <textarea
            id="content"
            name="content"
            placeholder="Write your post content"
            value={formValues.content}
            onChange={handleChange}
            rows="8"
            required
          />
        </label>

        <label className="form-field" htmlFor="tags">
          Tags
          <input
            id="tags"
            name="tags"
            type="text"
            placeholder="Example: react, api, frontend"
            value={formValues.tags}
            onChange={handleChange}
          />
        </label>

        <button className="primary-button" type="submit">
          Save Draft
        </button>

        {isSubmitted && (
          <p className="form-success" aria-live="polite">
            Draft captured. You can now refine the content before publishing.
          </p>
        )}
      </form>
    </section>
  )
}

export default CreatePostPage
