function FeedbackMessage({ title, message, tone = 'neutral' }) {
  return (
    <section className={`feedback-card feedback-${tone}`} aria-live="polite">
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  )
}

export default FeedbackMessage
