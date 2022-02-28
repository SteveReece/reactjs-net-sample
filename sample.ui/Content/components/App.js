import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route } from 'react-router-dom'
import { Container, Row, Col, Navbar } from 'reactstrap'
import { createMemoryHistory, createBrowserHistory } from 'history'
import { PageStyle, OverlayStyle } from './Styles'
import Header from './Header'
import Home from './Home'
import Blog from './Blog'
import Footer from './Footer'

const App = (props) => {
  const {url} = {...props}
  const history = typeof window === 'undefined'
    ? createMemoryHistory()
    : createBrowserHistory()

  return (
    <Router basename='/' url={url} history={history}>
      <PageStyle>
        <OverlayStyle>
          <Header />
          <Switch>
            <Route path='/blog/:id?' render={() => <Blog {...props} />} />
            <Route exact path='/' render={() => <Home {...props} />} />
          </Switch>
          <Footer />
        </OverlayStyle>
      </PageStyle>
    </Router>
  )
}

export default App
