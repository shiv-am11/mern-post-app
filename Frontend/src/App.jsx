import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Createpost from "./Components/Createpost"
import Feed from "./Components/Feed"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<Createpost/>}/>
        <Route path="/feed" element={<Feed/>}/>
           
           
      </Routes>
    </Router>
    
  )
}

export default App