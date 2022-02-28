import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { ListStyle, LoadingStyle } from './Styles'

const Home = ({blogs}) => {
  const [blogList, setBlogList] = useState(blogs)
  const [loading, setLoading] = useState(!blogs)
  const history = useHistory();

  const getBlogItems = () => {
    console.log('Getting blogs!');
    fetch(`/api/blogs`)
    .then(response => {
      if (response.ok) {
        response.json()
        .then(json => {
          setBlogList(json)
          setLoading(false)
        })
      }
    })
  }

  const onClick = (id) => {
    history.push(`/blog/${id}`)
  }

  if (typeof window !== 'undefined' && !blogs) {
    useEffect(()=>{
      getBlogItems()
    },[])
  }

  return (
    <ListStyle>
      <Container fluid>
        {!!loading &&
          <Row>
            <Col xs={0} sm={0} lg={2} />
            <Col xs={12} sm={12} lg={8}>
              <LoadingStyle>
                Loading...
              </LoadingStyle>
            </Col>
            <Col xs={0} sm={0} lg={2} />
          </Row>
        }
        {!!blogList &&
          blogList.map((blog,i) =>
          <>
            <Row key={i}>
              <Col xs={12} sm={12} lg={2} />
              <Col xs={12} sm={12} lg={6} className='landing-menu-item'>
                <h4><Link className='text-dark' to={`/blog/${blog.id}`}>{blog.title}<br /></Link></h4>
                <p>{blog.fragment}...</p>
              </Col>
              <Col sm={12} xs={12} lg={2} className='landing-menu-item landing-menu-button'>
                <Button onClick={() => onClick(blog.id)}>See More...</Button>
              </Col>
              <Col xs={0} sm={0} lg={2} />
            </Row>
          </>)
        }
      </Container>
    </ListStyle>
  )
}

export default Home
