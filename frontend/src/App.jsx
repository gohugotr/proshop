import HeaderPro from './components/HeaderPro'
import FooterPro from './components/FooterPro'
import {Container} from 'react-bootstrap'
import HomeScreen from './screen/HomeScreen'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductScreen from './screen/ProductScreen'

const App = () => {
  return (
    <Router>
      <HeaderPro />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <FooterPro />
    </Router>
  )
}

export default App
