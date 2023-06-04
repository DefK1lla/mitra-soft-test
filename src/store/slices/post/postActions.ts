import {
  FetchPosts,
  FetchPostsPaylod,
  PostTypes,
  PostsLoading,
  PostsSuccess,
  PostsSuccessPayload,
} from './postTypes'

export const fetchPosts = (
  payload: FetchPostsPaylod
): FetchPosts => ({
  type: PostTypes.POSTS_FETCH,
  payload,
})

export const postsLoading = (): PostsLoading => ({
  type: PostTypes.POSTS_LOADGING,
})

export const postsSuccess = (
  payload: PostsSuccessPayload
): PostsSuccess => ({
  type: PostTypes.POSTS_SUCCESS,
  payload,
})

export const postsError = (payload: string) => ({
  type: PostTypes.POSTS_ERROR,
  payload,
})
