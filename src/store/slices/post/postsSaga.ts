import { all, call, put, takeEvery } from 'redux-saga/effects'
import { FetchPosts, PostTypes } from './postTypes'
import { postsError, postsSuccess } from './postActions'
import { getPosts } from 'shared/api/posts/routes'
import { Post } from 'shared/types/post'
import { AxiosResponse } from 'axios'

function* fetchPostsWorker(action: FetchPosts): any {
  try {
    const res: AxiosResponse<Post[]> = yield call(
      getPosts,
      action.payload.page,
      action.payload.limit
    )

    if (res.status >= 500) {
      postsError('Server error')
      throw new Error(res.statusText)
    }

    yield put(
      postsSuccess({
        count: +res.headers['x-total-count'],
        page: action.payload.page,
        posts: res.data,
      })
    )
  } catch (e) {
    console.error(e)
  }
}

function* postsSagaWatcher() {
  yield all([takeEvery(PostTypes.POSTS_FETCH, fetchPostsWorker)])
}

export default postsSagaWatcher
