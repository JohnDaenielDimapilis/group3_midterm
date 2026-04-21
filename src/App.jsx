import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from './components/AppShell'
import CreatePostPage from './pages/CreatePostPage'
import HomePage from './pages/HomePage'
import PostDetailPage from './pages/PostDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'item/:id',
        element: <PostDetailPage />,
      },
      {
        path: 'create',
        element: <CreatePostPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
