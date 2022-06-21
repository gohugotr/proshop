import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = () => {
  let { id } = useParams()
  const product = products.find((p) => p._id === id)
  return (
    <>
      <Link className='btn btn-light' to='/'>
        Geri
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} yorum`} color='red' />
            </ListGroupItem>
            <ListGroupItem>Fiyat: ₺{product.price}</ListGroupItem>
            <ListGroupItem>
              <strong className='fw-bold'>Açıklama:</strong> {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Fiyat: </Col>
                  <Col>
                    <strong className='fw-bold'>₺{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Stok: </Col>
                  <Col>
                    <strong className='fw-bold'>
                      {product.countInStock > 0 ? 'Stokta' : 'Tükendi'}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroup.Item className='d-grid gap-2'>
                <Button type='button' disabled={product.countInStock === 0}>
                  Sepete Ekle
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
