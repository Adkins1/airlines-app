import React, { useState } from "react"
import "./App.css"
import Form from "./Components/Form/Form"
import Results from "./Components/Results/Results"
import { Connection } from "./model"
function App() {
  const [flights, setFlights] = useState<Connection[]>([])

  return (
    <>
      <Form setFlights={setFlights} />
      <Results flights={flights} />
    </>
  )
}

export default App
