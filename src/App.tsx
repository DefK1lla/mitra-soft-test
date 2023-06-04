import { PostCard } from './features'
import POST_MOCK from './shared/mock/post'
import './styles/App.css'

function App() {
  return (
    <div>
      <PostCard {...POST_MOCK} />
    </div>
  )
}

export default App
