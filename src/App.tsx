import { useEffect } from 'react'
import { PostCard } from './features'
import POST_MOCK from './shared/mock/post'
import './styles/App.css'
import { fetchPosts } from 'store/slices/post/postActions'
import { useAppDispatch } from 'store/hooks'
import AppRouter from 'router/Router'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(
      fetchPosts({
        limit: 10,
        page: 0,
      })
    )
  }, [])
  return <AppRouter />
}

export default App
