
import Navbar from './components/navbar/Navbar'
import Router from './routes/routes'

function App() {


  return (
    <>
    <Navbar onLogout={() => {}} />
    <Router />
    </>
  )
}

export default App
