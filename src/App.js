import './App.css'
import './style.css'
import React, { useRef, useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"
import HomeLayout from './components/HomeLayout'
import PrivateRoute from './router/PrivateRouter'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute component={HomeLayout} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
