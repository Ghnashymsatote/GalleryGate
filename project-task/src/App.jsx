import Sign from "./Sign"
import Login from "./Login"
import Mid from "./Mid"
import Post from "./Post"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign/>}></Route>
        <Route path='/loginPage' element={<Login/>}></Route> 
        <Route path='/Middle' element={<Mid/>}></Route>
        <Route path="/Middle/Post" element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
