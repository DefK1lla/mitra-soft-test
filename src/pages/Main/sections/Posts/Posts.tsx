import { useEffect } from 'react'

import { Container } from 'react-bootstrap'

import { PostCard } from 'features'

import { useAppDispatch, useAppSelector } from 'store/hooks'

import { fetchPosts } from 'store/slices/post/postActions'

const Posts = () => {
  const { limit, page, count, posts } = useAppSelector(
    state => state.posts
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchPosts({
      limit,
      page,
    })
  }, [])

  return (
    <Container>
      {posts?.map(p => (
        <PostCard key={p.id} {...p} />
      ))}
    </Container>
  )
}

export default Posts
