import './App.css'
import './styles/feedback.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Page components
import FeedbackPage from './components/FeedbackPage' 
import Test from './components/Test';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Test/>}/>
      <Route path='/feedback' element={<FeedbackPage/>}/>

    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
