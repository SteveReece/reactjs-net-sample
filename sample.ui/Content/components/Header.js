import React from 'react'
import { Col, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HeaderStyle } from './Styles'

const Header = () => {
  return (
    <HeaderStyle>
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container fluid>
            <Col xs={0} sm={0} lg={2} />
            <Col xs={12} sm={12} lg={8}>
              <NavbarBrand className='nav-brand' tag={Link} to="/">ReactJS.Net and .NET 6.0 Sample</NavbarBrand>
            </Col>
            <Col xs={0} sm={0} lg={2} />
          </Container>
        </Navbar>
      </header>
    </HeaderStyle>
  )
}

export default Header
