import HeaderPro from './components/HeaderPro'
import FooterPro from './components/FooterPro'
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <>
      <HeaderPro />
      <main>
        <Container>
          <h1>ProShop'a Hoşgeldiniz</h1>
        </Container>
      </main>
      <FooterPro />
    </>
  )
}

export default App
