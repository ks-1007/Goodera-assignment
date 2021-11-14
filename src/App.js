import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import ExplorePage from "./Pages/ExplorePage"

import { Route, Routes } from "react-router-dom"
import PostJob from "./Pages/PostJob"
import NotFound from "./Pages/NotFound"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ExplorePage />}></Route>
        <Route path="/post" element={<PostJob />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
