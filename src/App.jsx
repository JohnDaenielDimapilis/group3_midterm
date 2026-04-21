import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from './components/AppShell'
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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
