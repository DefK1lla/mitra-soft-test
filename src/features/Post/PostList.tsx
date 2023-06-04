import { useEffect } from 'react'

import { Container, Pagination } from 'react-bootstrap'

import { PostCard } from 'features'

import { useAppDispatch, useAppSelector } from 'store/hooks'

import { fetchPosts } from 'store/slices/post/postActions'

import s from './post.module.scss'

const PostList = () => {
  const { limit, page, count, posts } = useAppSelector(
    state => state.posts
  )
  const dispatch = useAppDispatch()

  const getPosts = (limit: number, page: number) =>
    dispatch(
      fetchPosts({
        limit,
        page,
      })
    )

  const paginationItems = []

  for (let i = 0; i <= Math.round(count / limit) - 1; i++) {
    paginationItems.push(
      <Pagination.Item
        key={i}
        active={page === i}
        onClick={() => getPosts(limit, i)}
      >
        {i + 1}
      </Pagination.Item>
    )
  }

  useEffect(() => {
    getPosts(limit, page)
  }, [])

  return (
    <Container>
      <div className={s.postsWrapper}>
        {posts?.map(p => (
          <PostCard key={p.id} {...p} />
        ))}
      </div>
      <Pagination>{paginationItems}</Pagination>
    </Container>
  )
}

export default PostList
