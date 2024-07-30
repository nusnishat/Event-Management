import Footer from './Components/Footer'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom';
function App() {


  return (
    <div className='font-roboto leading-relaxed'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
