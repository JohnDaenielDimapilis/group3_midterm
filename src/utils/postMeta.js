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

const topicProfiles = [
  {
    name: 'Debugging',
    tags: ['#debugging', '#fullstack', '#deployment'],
    nouns: ['route mismatch', 'response bug', 'silent crash', 'broken sync'],
  },
  {
    name: 'API Integration',
    tags: ['#api', '#backend', '#rtkquery'],
    nouns: ['API contract', 'data mapping', 'request flow', 'endpoint response'],
  },
  {
    name: 'Data Handling',
    tags: ['#data', '#frontend', '#state'],
    nouns: ['list state', 'result set', 'data cleanup', 'content structure'],
  },
  {
    name: 'Search UX',
    tags: ['#search', '#react', '#ux'],
    nouns: ['search behavior', 'filter logic', 'query flow', 'result matching'],
  },
  {
    name: 'Pagination',
    tags: ['#pagination', '#react', '#ui'],
    nouns: ['page state', 'button logic', 'screen flow', 'navigation rhythm'],
  },
  {
    name: 'Responsive Design',
    tags: ['#design', '#responsive', '#css'],
    nouns: ['mobile layout', 'card spacing', 'visual polish', 'layout balance'],
  },
  {
    name: 'Forms',
    tags: ['#forms', '#ux', '#frontend'],
    nouns: ['form flow', 'input handling', 'submission state', 'content drafting'],
  },
  {
    name: 'Workflow',
    tags: ['#workflow', '#productivity', '#devlife'],
    nouns: ['build process', 'project flow', 'handoff issue', 'development routine'],
  },
  {
    name: 'Navigation',
    tags: ['#navigation', '#ui', '#frontend'],
    nouns: ['menu behavior', 'interaction pattern', 'link flow', 'page transition'],
  },
  {
    name: 'Performance',
    tags: ['#performance', '#webdev', '#optimization'],
    nouns: ['render issue', 'slow interaction', 'state update', 'loading pattern'],
  },
]

const titleOpeners = [
  'From',
  'How',
  'Why',
  'The Night',
  'What Happened When',
  'How I Turned',
  'The Breakthrough Behind',
  'When',
  'The Fix That Changed',
  'How One Small Change Solved',
]

const titleStruggles = [
  'Debugging Hell',
  'Broken State',
  'API Chaos',
  'A UI Mess',
  'Search Frustration',
  'Pagination Confusion',
  'A Layout Crisis',
  'A Form Headache',
  'Workflow Friction',
  'A Silent Bug',
]

const titleOutcomes = [
  'Deployment Success',
  'A Real Full Stack Win',
  'My Cleanest Refactor Yet',
  'A Better Product Experience',
  'A Frontend Breakthrough',
  'The Project Turning Point',
  'A Smarter Workflow',
  'A More Reliable App',
  'A UI I Was Proud to Ship',
  'My Best Debugging Lesson Yet',
]

const introMoments = [
  'Last night turned into one of those sessions every developer remembers.',
  'I sat down expecting a quick fix and ended up in a much longer battle.',
  'What started as a normal coding session quickly became a real test of patience.',
  'I thought I was close to done, but the app had a very different plan.',
  'This was one of those nights where every small bug felt louder than it should.',
]

const setupLines = [
  'The interface looked stable at first, but the moment real data started moving, the weak spots showed up immediately.',
  'Everything seemed fine on the surface until I tested the full flow the way a real user would.',
  'The feature technically worked, yet something in the experience kept feeling off every time I clicked through it.',
  'I had enough of the system in place to feel confident, but not enough clarity to trust the result.',
  'The app was running, but there was still one part of the flow that kept breaking the illusion of progress.',
]

const investigationLines = [
  'At first I blamed state management, then caching, then the API itself, because every layer seemed suspicious for a different reason.',
  'I checked logs, replayed requests, and read component code line by line because the bug refused to point to one obvious cause.',
  'The hardest part was that nothing failed loudly; the behavior just felt wrong in a way that made debugging slower.',
  'I kept circling between frontend logic and backend assumptions until I forced myself to validate each step one by one.',
  'The bug was frustrating because every small test looked harmless until the whole feature ran together.',
]

const breakthroughLines = [
  'The breakthrough came when I stopped guessing and inspected the small details I had been treating as too minor to matter.',
  'Everything changed the moment I found the mismatch hiding between what the UI expected and what the system was actually sending.',
  'The fix was surprisingly small, but it unlocked the entire flow the second I corrected it.',
  'Once I isolated the real cause, the rest of the project started falling back into place almost immediately.',
  'The turning point came from stepping back, simplifying the path, and checking the system in the same order the user experiences it.',
]

const closingLines = [
  'That moment reminded me that real progress in development usually comes from clarity, not panic.',
  'It was one of those wins that makes the long debugging sessions feel worth it.',
  'Seeing the feature finally behave the right way gave me the kind of confidence only hard-earned fixes create.',
  'The whole experience reinforced why I enjoy building systems: every mistake teaches you how the product actually works.',
  'It felt less like finishing a task and more like understanding the app at a deeper level.',
]

const insightLines = [
  'The biggest lesson was that tiny implementation details can control the success of an entire feature.',
  'I was reminded that good interfaces depend on predictable logic behind the scenes.',
  'The session proved that cleaner structure usually beats clever shortcuts.',
  'What helped most was slowing down and checking the flow in the exact order users experience it.',
  'I left the session with a stronger respect for how small inconsistencies ripple through an entire app.',
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
  return getPostProfile(post).tags
}

export function getPostDisplayTitle(post) {
  const profile = getPostProfile(post)
  const opener = pick(titleOpeners, post.id)
  const struggle = pick(titleStruggles, post.id + profile.seed)
  const outcome = pick(titleOutcomes, post.id * 2 + profile.seed)

  return `${opener} ${struggle} to ${outcome}: ${profile.name} Story #${post.id}`
}

export function getPostStory(post) {
  const profile = getPostProfile(post)
  const author = getAuthorName(post.userId)
  const title = getPostDisplayTitle(post)
  const challenge = pick(profile.nouns, post.id + 1)

  return [
    `${pick(introMoments, post.id)} While working on "${title}," I ended up wrestling with a ${challenge} that kept interrupting the flow of the project. ${pick(setupLines, post.id + profile.seed)}`,
    `The more I tested the feature, the clearer it became that the problem was not just visual. ${pick(investigationLines, post.id + profile.seed * 2)} What made it difficult was that each layer seemed partly correct on its own, but the full experience still felt inconsistent.`,
    `${pick(breakthroughLines, post.id + profile.seed * 3)} Once I corrected it, the app felt noticeably better right away. Data became easier to trust, the interface felt more polished, and the entire feature finally started behaving like a finished product instead of a work in progress.`,
    `${pick(closingLines, post.id + profile.seed * 4)} ${author} closes this vlog with one clear takeaway: ${pick(insightLines, post.id + profile.seed * 5)} If you are in the middle of a frustrating bug right now, keep going. Sometimes the biggest improvement comes from the smallest fix.`,
  ]
}

export function getStoryPreview(post) {
  return getPostStory(post)[0]
}

function getPostProfile(post) {
  const combinedText = `${post.title} ${post.body}`.toLowerCase()
  const keywordMatch = topicProfiles.find((profile) =>
    profile.name !== 'default' &&
    profile.nouns.some((noun) =>
      combinedText.includes(noun.split(' ')[0]),
    ),
  )

  if (keywordMatch) {
    return {
      ...keywordMatch,
      seed: topicProfiles.indexOf(keywordMatch) + 1,
    }
  }

  const fallbackProfile = topicProfiles[(post.id - 1) % topicProfiles.length]

  return {
    ...fallbackProfile,
    seed: ((post.id - 1) % topicProfiles.length) + 1,
  }
}

function pick(list, seed) {
  return list[Math.abs(seed) % list.length]
}
