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

const titlePatterns = [
  { keyword: 'error', title: 'Fixing Common App Errors Without Losing Momentum' },
  { keyword: 'design', title: 'Design Decisions That Make Interfaces Easier to Use' },
  { keyword: 'api', title: 'Connecting API Data to a Cleaner Frontend Experience' },
  { keyword: 'data', title: 'Making Raw Data Easier to Read and Explore' },
  { keyword: 'search', title: 'Building Search That Feels Fast and Useful' },
  { keyword: 'form', title: 'Creating Better Input Flows for Content Publishing' },
  { keyword: 'page', title: 'Structuring Pages for Better Navigation and Focus' },
  { keyword: 'layout', title: 'Improving Layout Flow for a Modern Web App' },
  { keyword: 'button', title: 'Small Button Changes That Improve Interaction' },
  { keyword: 'time', title: 'Saving Time With Smarter Frontend Workflows' },
  { keyword: 'aut', title: 'Authoring Better Tech Stories for Everyday Problems' },
  { keyword: 'provident', title: 'Solving Process Gaps With Clearer Product Thinking' },
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

export function getPostDisplayTitle(post) {
  const combinedText = `${post.title} ${post.body}`.toLowerCase()
  const matchingPattern = titlePatterns.find(({ keyword }) =>
    combinedText.includes(keyword),
  )

  if (matchingPattern) {
    return matchingPattern.title
  }

  const tags = getPostTags(post).map((tag) => tag.replace('#', ''))
  const primaryTag = tags[0] ?? 'frontend'
  const secondaryTag = tags[1] ?? 'workflow'

  return `A Practical PostIT Story About ${capitalize(primaryTag)} and ${capitalize(secondaryTag)}`
}

export function getPostStory(post) {
  const author = getAuthorName(post.userId)
  const title = getPostDisplayTitle(post)
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

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
