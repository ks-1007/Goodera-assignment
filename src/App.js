import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import ExplorePage from "./Pages/ExplorePage"

import { Switch, Route, Link, Router, Routes } from "react-router-dom"
import PostJob from "./Pages/PostJob"
import NotFound from "./Pages/NotFound"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/">
          <ExplorePage />
        </Route>
        <Route path="/post">
          <PostJob />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Routes>
    </div>
  )
}

export default App
