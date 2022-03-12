import React, { useState } from "react"
import { connections } from "../../data/airlinesData"
import { Connection } from "../../model"

interface Props {
  setFlights: React.Dispatch<React.SetStateAction<Connection[]>>
}

const Form: React.FC<Props> = ({ setFlights }) => {
  const [port1, setPort1] = useState<string>("")
  const [port2, setPort2] = useState<string>("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const filterConn = (con: Connection) => {
      if (con.port1 === connection.port1 && con.port2 === connection.port2) {
        return connection
      }
    }
    let connection: Connection = { port1, port2 }
    const filteredConnection: Connection[] = connections.filter(filterConn)
    if (filteredConnection) {
      setFlights(filteredConnection)
    }
  }

  return (
    // todo: input autocomplete from array
    <form autoComplete="off" onSubmit={(e) => handleSearch(e)}>
      <h1>Flights search form</h1>
      <label htmlFor="airport1">From:</label>
      <input
        type="text"
        id="airport1"
        value={port1}
        onChange={(e) => setPort1(e.target.value)}
        placeholder="Airport's code or name"
      />
      <label htmlFor="airport2">To:</label>
      <input
        type="text"
        id="airport2"
        value={port2}
        onChange={(e) => setPort2(e.target.value)}
        placeholder="Airport's code or name"
      />
      <input type="submit" />
    </form>
  )
}
export default Form
