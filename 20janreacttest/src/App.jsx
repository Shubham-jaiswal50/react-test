import { BrowserRouter,Route,Routes } from "react-router-dom"
import Question1 from "./queston1"
import Question2 from "./question2"
import Question3 from "./question3"
import Question4 from "./question4"
import Question5 from "./question5"
import Layout from "./layout"
import Home from "./home"
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="question1" element={<Question1/>}/>
    <Route path="question2" element={<Question2/>}/>
    <Route path="question3" element={<Question3/>}/>
    <Route path="question4" element={<Question4/>}/>
    <Route path="question5" element={<Question5/>}/>
    
   </Route>

    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}
export default App
