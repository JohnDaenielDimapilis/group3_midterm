const authorNames = [
  'Ava Thompson',
  'Noah Patel',
  'Mia Santos',
  'Liam Brooks',
  'Sofia Reyes',
  'Ethan Cruz',
  'Isla Bennett',
  'Lucas Tan',
  'Zoe Martin',
  'Nathan Cole',
]

export function getAuthorName(userId) {
  return authorNames[(userId - 1) % authorNames.length]
}

export function getPublishDate(id) {
  const date = new Date(Date.UTC(2025, 0, 1))
  date.setUTCDate(date.getUTCDate() + id * 2)

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export function getPostTags(post) {
  const words = `${post.title} ${post.body}`
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 4)

  return [...new Set(words)].slice(0, 3).map((word) => `#${word}`)
}

export function getPostStory(post) {
  const author = getAuthorName(post.userId)
  const title = post.title.charAt(0).toUpperCase() + post.title.slice(1)
  const summary = post.body.charAt(0).toUpperCase() + post.body.slice(1)

  return [
    `${author} opens this PostIT entry by framing "${title}" as a practical lesson from everyday tech work. The post starts with a grounded explanation of the problem, why it matters to developers, and how small workflow decisions can shape the final result.`,
    `${summary}. From there, the story expands into a clearer walkthrough that connects planning, execution, and review. Instead of treating the topic like a quick note, the post reads like a guided vlog episode that helps readers follow the full thought process.`,
    `By the end, the article leaves readers with a usable takeaway: keep the setup simple, test ideas early, and document the parts that make future updates easier. That balance between clarity and execution is what gives this story its PostIT identity.`,
  ]
}

export function getStoryPreview(post) {
  return getPostStory(post)[0]
}
