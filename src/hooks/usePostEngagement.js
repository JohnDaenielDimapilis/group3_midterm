import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'postit-engagement-v1'
const UPDATE_EVENT = 'postit-engagement-updated'

export function usePostEngagement(postId) {
  const normalizedPostId = Number(postId)
  const [engagement, setEngagement] = useState(() =>
    getEngagementState(normalizedPostId),
  )

  useEffect(() => {
    const syncEngagement = () => {
      setEngagement(getEngagementState(normalizedPostId))
    }

    syncEngagement()
    window.addEventListener(UPDATE_EVENT, syncEngagement)
    window.addEventListener('storage', syncEngagement)

    return () => {
      window.removeEventListener(UPDATE_EVENT, syncEngagement)
      window.removeEventListener('storage', syncEngagement)
    }
  }, [normalizedPostId])

  const summary = useMemo(
    () => ({
      liked: engagement.liked,
      likes: engagement.likes,
      commentsCount: engagement.comments.length,
    }),
    [engagement],
  )

  const toggleLike = () => {
    const nextState = {
      ...engagement,
      liked: !engagement.liked,
      likes: engagement.liked ? engagement.likes - 1 : engagement.likes + 1,
    }

    persistEngagement(normalizedPostId, nextState)
    setEngagement(nextState)
  }

  const addComment = (commentText) => {
    const trimmedComment = commentText.trim()

    if (!trimmedComment) {
      return false
    }

    const nextComment = {
      id: `${normalizedPostId}-${Date.now()}`,
      author: `Reader ${String((engagement.comments.length % 9) + 1).padStart(2, '0')}`,
      content: trimmedComment,
      createdAt: new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date()),
    }

    const nextState = {
      ...engagement,
      comments: [nextComment, ...engagement.comments],
    }

    persistEngagement(normalizedPostId, nextState)
    setEngagement(nextState)

    return true
  }

  return {
    ...summary,
    comments: engagement.comments,
    toggleLike,
    addComment,
  }
}

function getEngagementState(postId) {
  const storedEngagement = readEngagementMap()
  return storedEngagement[postId] ?? createDefaultEngagement(postId)
}

function persistEngagement(postId, nextState) {
  const currentMap = readEngagementMap()
  const nextMap = {
    ...currentMap,
    [postId]: nextState,
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextMap))
  window.dispatchEvent(new Event(UPDATE_EVENT))
}

function readEngagementMap() {
  if (typeof window === 'undefined') {
    return {}
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY)

  if (!rawValue) {
    return {}
  }

  try {
    return JSON.parse(rawValue)
  } catch {
    return {}
  }
}

function createDefaultEngagement(postId) {
  return {
    liked: false,
    likes: 12 + ((postId * 7) % 29),
    comments: createDefaultComments(postId),
  }
}

function createDefaultComments(postId) {
  const starterComments = [
    'This part about tracing the bug step by step felt very real.',
    'I like how the story focuses on the actual development process.',
    'That takeaway about checking the small details first really landed for me.',
  ]

  const commentCount = (postId % 2) + 1

  return Array.from({ length: commentCount }, (_, index) => ({
    id: `seed-${postId}-${index}`,
    author: `Reader ${index + 1}`,
    content: starterComments[(postId + index) % starterComments.length],
    createdAt: 'May 2026',
  }))
}
