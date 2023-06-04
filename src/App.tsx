import { useEffect } from 'react'
import { PostCard } from './features'
import POST_MOCK from './shared/mock/post'
import './styles/App.css'
import { fetchPosts } from 'store/slices/post/postActions'
import { useAppDispatch } from 'store/hooks'

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
  return (
    <div>
      <PostCard {...POST_MOCK} />
    </div>
  )
}

export default App
