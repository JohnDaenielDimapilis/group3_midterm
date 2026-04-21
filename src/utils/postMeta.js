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
    challenge:
      'a stubborn bug that kept breaking the connection between my frontend and backend',
    insight:
      'one tiny mismatch in a route or response shape can waste hours if I assume the UI is the only problem',
    setup:
      'My frontend looked polished on the surface, but the moment I started tracing live responses, the entire data flow felt suspicious.',
    breakthrough:
      'The fix came after I stopped guessing and checked the route definitions, payload structure, and request logs one by one until the mismatch finally showed itself.',
  },
  {
    keywords: ['api', 'endpoint', 'server', 'request'],
    title: 'Why My API Finally Started Making Sense After One Small Refactor',
    tags: ['#api', '#backend', '#refactor'],
    challenge:
      'API responses that looked correct at first but kept falling apart once real UI states kicked in',
    insight:
      'clean endpoints and predictable payloads make frontend work dramatically easier',
    setup:
      'I kept getting data back from the server, but it never arrived in a shape that made the UI feel stable or easy to trust.',
    breakthrough:
      'Once I simplified the endpoint logic and made the response contract more predictable, the entire app started feeling lighter to build on.',
  },
  {
    keywords: ['data', 'list', 'results', 'display'],
    title: 'Turning Messy Data Into a UI People Can Actually Read',
    tags: ['#data', '#uiux', '#frontend'],
    challenge:
      'raw data that technically worked but felt confusing once it reached the screen',
    insight:
      'presentation matters just as much as the request itself when users need to scan information fast',
    setup:
      'The content was there, but the experience still felt noisy because the information was not organized in a way people could read quickly.',
    breakthrough:
      'After restructuring the cards, metadata, and spacing, the same data finally started telling a cleaner story.',
  },
  {
    keywords: ['search', 'filter', 'find'],
    title: 'The Day Search Finally Felt Smart Instead of Frustrating',
    tags: ['#search', '#react', '#ux'],
    challenge:
      'a search experience that returned results but still felt awkward and unreliable',
    insight:
      'small improvements in filtering logic can completely change how useful a page feels',
    setup:
      'I wanted search to feel immediate and helpful, but the early version still felt like it was technically correct without being truly useful.',
    breakthrough:
      'Resetting the page state, tightening the filters, and matching the visible content made the search feel much more intentional.',
  },
  {
    keywords: ['page', 'pagination', 'next', 'previous'],
    title: 'How I Fixed Pagination So the Whole App Felt More Organized',
    tags: ['#pagination', '#state', '#react'],
    challenge:
      'page controls that looked simple but kept drifting out of sync with the actual data',
    insight:
      'good pagination is less about buttons and more about keeping state predictable',
    setup:
      'At first the page controls seemed minor, but once search and slicing started interacting, the rough edges became impossible to ignore.',
    breakthrough:
      'The experience improved the moment I treated pagination like shared app state instead of a visual afterthought.',
  },
  {
    keywords: ['design', 'layout', 'style', 'responsive'],
    title: 'Rebuilding My Interface Until It Finally Looked Like a Real Product',
    tags: ['#design', '#responsive', '#css'],
    challenge:
      'a layout that functioned technically but still felt unfinished and hard to trust',
    insight:
      'clarity, spacing, and consistency are what turn a student project into something presentable',
    setup:
      'The old interface worked, but it did not create the confidence or readability I wanted from a modern content platform.',
    breakthrough:
      'Once I committed to a stronger visual direction and tightened the spacing, the project finally started looking intentional.',
  },
  {
    keywords: ['form', 'input', 'create', 'submit'],
    title: 'What Building a Create Post Form Taught Me About User Flow',
    tags: ['#forms', '#ux', '#frontend'],
    challenge:
      'a form flow that seemed easy on paper but quickly exposed missing structure in the UI',
    insight:
      'good forms guide people instead of forcing them to guess what comes next',
    setup:
      'What looked like a simple form quickly turned into a bigger lesson about clarity, sequence, and reducing hesitation.',
    breakthrough:
      'The flow improved once each field had a clearer purpose and the whole form started guiding the user step by step.',
  },
  {
    keywords: ['time', 'process', 'workflow', 'project'],
    title: 'The Workflow Mistake I Fixed Before It Slowed Down My Whole Project',
    tags: ['#workflow', '#productivity', '#devlife'],
    challenge:
      'small process issues that kept stacking up and making simple tasks feel heavier than they should',
    insight:
      'steady workflows usually come from removing friction, not adding more tools',
    setup:
      'The project was moving, but my process still had enough friction to make everyday tasks slower than they needed to be.',
    breakthrough:
      'The biggest win came from simplifying the routine and fixing the handoff points that kept breaking momentum.',
  },
  {
    keywords: ['button', 'click', 'action', 'navigation'],
    title: 'A Few UI Tweaks Made My Navigation Feel Ten Times Better',
    tags: ['#navigation', '#ui', '#frontend'],
    challenge:
      'an interface where the actions were visible but still did not feel natural to use',
    insight:
      'buttons and navigation patterns quietly shape the confidence users feel while exploring an app',
    setup:
      'People could technically move through the app, but the navigation still lacked the comfort and rhythm of a polished product.',
    breakthrough:
      'Once I improved button states, labels, and action placement, the experience immediately felt more natural.',
  },
  {
    keywords: ['default'],
    title: 'The Small Breakthrough That Made My App Feel Complete',
    tags: ['#webdev', '#problem-solving', '#postit'],
    challenge:
      'a mix of little issues that only became obvious once I started testing the app like a real user',
    insight:
      'most meaningful progress comes from tightening details that seemed minor at first',
    setup:
      'Nothing was completely broken, but enough small details felt off that I knew the project still needed one more serious pass.',
    breakthrough:
      'The final improvements came from treating those small inconsistencies like real product problems instead of cosmetic issues.',
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

  return [
    `Last night was one of those moments I know I will remember for a long time. While working on "${theme.title}," I spent hours trying to untangle ${theme.challenge}. My React interface looked stable, but the moment real data started moving through the app, the weak spots became impossible to ignore.`,
    `${theme.setup} At first, I questioned everything from state management to data fetching, and I honestly thought the problem was buried somewhere much deeper. After checking logs, testing flows manually, and reviewing the code line by line, I realized the real issue was much smaller than the stress it caused.`,
    `${theme.breakthrough} Once I fixed it, the entire project started behaving the way I had imagined from the start. The data felt cleaner, the UI made more sense, and even the navigation became easier to trust.`,
    `That moment reminded me that progress in development usually comes from understanding the system more clearly, not from panicking when something breaks. ${author} wraps up this entry with one lesson that stands out: ${theme.insight}. If you are stuck on a frustrating issue right now, keep going. The breakthrough might be hidden inside one small detail you have not checked yet.`,
  ]
}

export function getStoryPreview(post) {
  return getPostStory(post)[0]
}

function getPostTheme(post) {
  const combinedText = `${post.title} ${post.body}`.toLowerCase()

  const matchedTheme = postThemes.find((theme) =>
    theme.keywords.some(
      (keyword) => keyword !== 'default' && combinedText.includes(keyword),
    ),
  )

  if (matchedTheme) {
    return matchedTheme
  }

  return (
    postThemes[post.id % (postThemes.length - 1)] ??
    postThemes[postThemes.length - 1]
  )
}
