import { Post } from '../../../shared/types/post'

export enum PostTypes {
  POSTS_DEFAULT = 'POSTS_DEFAULT',
  POSTS_FETCH = 'POSTS_FETCH',
  POSTS_ERROR = 'POSTS_ERROR',
  POSTS_SUCCESS = 'POSTS_SUCCESS',
  POSTS_LOADGING = 'POSTS_LOADING',
}

export interface FetchPostsPaylod {
  page: number
  limit: number
}

export interface FetchPosts {
  type: PostTypes.POSTS_FETCH
  payload: FetchPostsPaylod
}

export interface PostsLoading {
  type: PostTypes.POSTS_LOADGING
}

export interface ChangePagePayload {
  posts: Post[]
  page: number
}

export interface PostsSuccessPayload {
  posts: Post[]
  count: number
  page: number
}

export interface PostsSuccess {
  type: PostTypes.POSTS_SUCCESS
  payload: PostsSuccessPayload
}

export interface PostsError {
  type: PostTypes.POSTS_ERROR
  payload: string
}

type PostsAction =
  | FetchPosts
  | PostsSuccess
  | PostsError
  | PostsLoading

export default PostsAction
