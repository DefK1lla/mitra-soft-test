import { FC } from 'react'

import { Accordion, Card } from 'react-bootstrap'

import { Post } from '../../shared/types/post'

import s from './post.module.scss'

import COMMENTS_MOCK from '../../shared/mock/comments'

const PostCard: FC<Post> = ({ userId, id, title, body }) => {
  return (
    <Card className={s.cardWrapper}>
      <Card.Body>
        <Card.Link>
          <img
            className={s.avatar}
            src='./img/user-mock.png'
            alt='user image'
          />
        </Card.Link>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Accordion onSelect={key => console.log(!!key)}>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Comments</Accordion.Header>
            <Accordion.Body className={s.commentsWrapper}>
              {COMMENTS_MOCK.map(c => (
                <div className={s.comment} key={c.id}>
                  <div className={s.email}>{c.email}</div>
                  <p>{c.body}</p>
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}

export default PostCard
