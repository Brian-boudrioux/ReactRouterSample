import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';



function App() {

  return (
    <>
        <Header />
        <Outlet />
        <footer>toto</footer>
    </>
  )
}

export default App
