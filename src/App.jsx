
import Home from './Components/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Addexpenses from './Components/Pages/Addexpenses'
import ViewExpenses from './Components/Pages/ViewExpenses'
import Updateexpense from './Components/Pages/Updateexpense'
import { Navbar } from './Components/Pages/Navbar'
function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<Addexpenses />} />
        <Route path="/viewExpenses" element={<ViewExpenses />} />
        <Route path="/updateexpense/:id" element={<Updateexpense />} />

      </Routes>
     </Router>
    </>
  )
}

export default App
