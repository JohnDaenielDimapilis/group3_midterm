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

const postThemes = [
  {
    keywords: ['error', 'bug', 'wrong', 'fail'],
    title: 'From Debugging Hell to Deployment Success: My First Full Stack Breakthrough',
    tags: ['#debugging', '#fullstack', '#deployment'],
    challenge: 'a stubborn bug that kept breaking the connection between my frontend and backend',
    insight: 'one tiny mismatch in a route or response shape can waste hours if I assume the UI is the only problem',
  },
  {
    keywords: ['api', 'endpoint', 'server', 'request'],
    title: 'Why My API Finally Started Making Sense After One Small Refactor',
    tags: ['#api', '#backend', '#refactor'],
    challenge: 'API responses that looked correct at first but kept falling apart once real UI states kicked in',
    insight: 'clean endpoints and predictable payloads make frontend work dramatically easier',
  },
  {
    keywords: ['data', 'list', 'results', 'display'],
    title: 'Turning Messy Data Into a UI People Can Actually Read',
    tags: ['#data', '#uiux', '#frontend'],
    challenge: 'raw data that technically worked but felt confusing once it reached the screen',
    insight: 'presentation matters just as much as the request itself when users need to scan information fast',
  },
  {
    keywords: ['search', 'filter', 'find'],
    title: 'The Day Search Finally Felt Smart Instead of Frustrating',
    tags: ['#search', '#react', '#ux'],
    challenge: 'a search experience that returned results but still felt awkward and unreliable',
    insight: 'small improvements in filtering logic can completely change how useful a page feels',
  },
  {
    keywords: ['page', 'pagination', 'next', 'previous'],
    title: 'How I Fixed Pagination So the Whole App Felt More Organized',
    tags: ['#pagination', '#state', '#react'],
    challenge: 'page controls that looked simple but kept drifting out of sync with the actual data',
    insight: 'good pagination is less about buttons and more about keeping state predictable',
  },
  {
    keywords: ['design', 'layout', 'style', 'responsive'],
    title: 'Rebuilding My Interface Until It Finally Looked Like a Real Product',
    tags: ['#design', '#responsive', '#css'],
    challenge: 'a layout that functioned technically but still felt unfinished and hard to trust',
    insight: 'clarity, spacing, and consistency are what turn a student project into something presentable',
  },
  {
    keywords: ['form', 'input', 'create', 'submit'],
    title: 'What Building a Create Post Form Taught Me About User Flow',
    tags: ['#forms', '#ux', '#frontend'],
    challenge: 'a form flow that seemed easy on paper but quickly exposed missing structure in the UI',
    insight: 'good forms guide people instead of forcing them to guess what comes next',
  },
  {
    keywords: ['time', 'process', 'workflow', 'project'],
    title: 'The Workflow Mistake I Fixed Before It Slowed Down My Whole Project',
    tags: ['#workflow', '#productivity', '#devlife'],
    challenge: 'small process issues that kept stacking up and making simple tasks feel heavier than they should',
    insight: 'steady workflows usually come from removing friction, not adding more tools',
  },
  {
    keywords: ['button', 'click', 'action', 'navigation'],
    title: 'A Few UI Tweaks Made My Navigation Feel Ten Times Better',
    tags: ['#navigation', '#ui', '#frontend'],
    challenge: 'an interface where the actions were visible but still didn’t feel natural to use',
    insight: 'buttons and navigation patterns quietly shape the confidence users feel while exploring an app',
  },
  {
    keywords: ['default'],
    title: 'The Small Breakthrough That Made My App Feel Complete',
    tags: ['#webdev', '#problem-solving', '#postit'],
    challenge: 'a mix of little issues that only became obvious once I started testing the app like a real user',
    insight: 'most meaningful progress comes from tightening details that seemed minor at first',
  },
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
  return getPostTheme(post).tags
}

export function getPostDisplayTitle(post) {
  return getPostTheme(post).title
}

export function getPostStory(post) {
  const author = getAuthorName(post.userId)
  const theme = getPostTheme(post)
  const summary = normalizeSentence(post.body)

  return [
    `Last night was one of those moments I know I will remember for a long time. While working on "${theme.title}," I spent hours trying to untangle ${theme.challenge}. My React interface looked stable, but the moment real data started moving through the app, the weak spots became impossible to ignore.`,
    `${summary} At first, I questioned everything from state management to data fetching, and I honestly thought the problem was buried somewhere much deeper. After checking logs, testing flows manually, and reading the code line by line, I realized the real issue was much smaller than the stress it caused.`,
    `Once I fixed it, the entire project started behaving the way I had imagined from the start. The data felt cleaner, the UI made more sense, and even the navigation became easier to trust. That moment reminded me that progress in development usually comes from understanding the system more clearly, not from panicking when something breaks.`,
    `${author} wraps up this entry with one lesson that stands out: ${theme.insight}. If you are stuck on a frustrating issue right now, keep going. The breakthrough might be hidden inside one small detail you have not checked yet.`,
  ]
}

export function getStoryPreview(post) {
  return getPostStory(post)[0]
}

function getPostTheme(post) {
  const combinedText = `${post.title} ${post.body}`.toLowerCase()

  const matchedTheme = postThemes.find((theme) =>
    theme.keywords.some((keyword) => keyword !== 'default' && combinedText.includes(keyword)),
  )

  if (matchedTheme) {
    return matchedTheme
  }

  return postThemes[post.id % (postThemes.length - 1)] ?? postThemes[postThemes.length - 1]
}

function normalizeSentence(text) {
  const trimmed = text.trim()

  if (!trimmed) {
    return 'I had to slow down and inspect the project carefully before the pattern finally made sense.'
  }

  const sentence = trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
  return sentence.endsWith('.') ? sentence : `${sentence}.`
}
