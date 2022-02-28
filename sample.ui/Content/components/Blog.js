import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router'
import { BlogDisplayStyle, BlogContainerStyle, LoadingStyle} from './Styles'

const Blog = ({url, blog}) => {
  const {id} = useParams()
  const [blogEntry, setBlogEntry] = useState(blog ? blog.id === id ? blog : null : null)
  const [loading, setLoading] = useState(!blog)
  const [config, setConfig] = useState({
    url: url,
    identifier: url,
    title: blog ? blog.title : ''
  })

  const getBlog = () => {
    if (!id) return
    fetch(`/api/blogs/${id}`)
    .then(response => {
      if (response.ok) {
        response.json()
        .then(json => {
          setBlogEntry(json)
          let uri = url
          if (!uri.includes(json.id)) {
            uri = `${url}blog/${json.id}`
          }
          setConfig({
            url: uri,
            identifier: uri,
            title: json.title
          })
          setLoading(false)
        })
      }
    })
  }

  if (typeof window !== 'undefined' && (!blog || blog.id != id)) {
    useEffect(()=>{
      getBlog()
    },[])
  }

  return (
    <BlogContainerStyle>
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
      <Row>
        <Col xs={0} sm={0} lg={2} />
        <Col xs={12} sm={12} lg={8}>
          <BlogDisplayStyle>
            <Container fluid>
              {!!blogEntry &&
                <>
                  <Row>
                    <Col xs={12} sm={12} lg={12}>
                      <h1>{blogEntry.title}</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} lg={12}>
                      <div dangerouslySetInnerHTML={{ __html: blogEntry.document }} />
                    </Col>
                  </Row>
                </>
              }
            </Container>
          </BlogDisplayStyle>
        </Col>
        <Col xs={0} sm={0} lg={2} />
      </Row>
    </Container>
    </BlogContainerStyle>
  )
}

export default Blog
