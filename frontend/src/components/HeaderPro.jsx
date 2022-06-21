import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const HeaderPro = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart me-1'></i>Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user me-1'></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default HeaderPro
