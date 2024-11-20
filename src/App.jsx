import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import Companies from "./components/companies/Companies"
import Residencies from "./components/residencies/Residencies"
import Value from "./components/value/Value"

function App() {

  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient"/>
        <Header />
        <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
      </div>
    </>
  )
}

export default App
