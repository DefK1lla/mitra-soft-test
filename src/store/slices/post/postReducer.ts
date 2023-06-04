import { Post } from '../../../shared/types/post'
import { DEFAULT_LIMIT } from '../../constants/constants'
import PostsAction, { PostTypes } from './postTypes'

export interface PostsState {
  posts: Post[] | null
  status: PostTypes
  page: number
  limit: number
  count: number
  error: string | null
  loading: boolean
}

const initialState: PostsState = {
  posts: null,
  status: PostTypes.POSTS_DEFAULT,
  page: 0,
  limit: DEFAULT_LIMIT,
  count: 0,
  error: null,
  loading: false,
}

const postsReducer = (
  state: PostsState = initialState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case PostTypes.POSTS_LOADGING:
      return {
        ...state,
        status: PostTypes.POSTS_LOADGING,
        loading: true,
      }

    case PostTypes.POSTS_SUCCESS:
      return {
        ...state,
        status: PostTypes.POSTS_SUCCESS,
        error: null,
        count: action.payload.count,
        page: action.payload.page,
        posts: action.payload.posts,
      }

    case PostTypes.POSTS_ERROR:
      return {
        ...state,
        status: PostTypes.POSTS_ERROR,
        error: action.payload,
        posts: null,
      }

    default:
      return state
  }
}

export default postsReducer
