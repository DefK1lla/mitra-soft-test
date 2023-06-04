import { AxiosPromise } from 'axios'
import { Post } from 'shared/types/post'
import Apis from '..'
import postEndpoints from './ednpoints'

export const getPosts = (
  page: number,
  limit: number
): AxiosPromise<Post[]> => {
  return Apis.posts.get(postEndpoints.posts(page, limit))
}
