import HeaderPro from './components/HeaderPro'
import FooterPro from './components/FooterPro'
import {Container} from 'react-bootstrap'
import HomeScreen from './screen/HomeScreen'

const App = () => {
  return (
    <>
      <HeaderPro />
      <main className='py-3'>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <FooterPro />
    </>
  )
}

export default App
