import React, { useState } from "react"
import { connections } from "../../data/airlinesData"
import { Connection } from "../../model"

interface Props {
  setFlights: React.Dispatch<React.SetStateAction<Connection[]>>
}

const Form: React.FC<Props> = ({ setFlights }) => {
  // states for users input data
  const [port1, setPort1] = useState<string>("")
  const [port2, setPort2] = useState<string>("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // compare user's search with objects stored in connections array
    const filterConn1 = (con: Connection) => {
      if (con.port1 === connection.port1 && con.port2 === connection.port2) {
        return con
      }
    }

    // users input data
    let connection: Connection = { port1, port2 }

    // filter connection from an array
    const firstConnection: Connection[] = connections.filter(filterConn1)

    // if connection is true (is found), give it to flight state (and show to the user later)
    if (firstConnection.length > 0) {
      setFlights(firstConnection)
    } else {
      const transferConnections: Connection[] = connections.filter(
        (con) => con.port1 === connection.port1
      )
      // second filter layer
      const filterConn2 = (con: Connection) => {
        let result: Connection[] = []
        for (let i = 0; i < transferConnections.length; i++) {
          if (
            transferConnections[i].port2 === con.port1 &&
            con.port2 === connection.port2
          ) {
            result = [transferConnections[i], con]
          }
        }

        if (result.length > 0) {
          console.log(result)
          return result
        }
      }
      // znowu filtrujemy ale z innym warunkiem, dla kazdego port2 w transferConnections sprawdzamy czy w connections jako port1 mają connection.port2 jako con.port2

      const secondConnection: Connection[] = connections.filter(filterConn2)
      console.log(secondConnection)
      if (secondConnection.length > 0) {
        setFlights(secondConnection)
      } else {
        setFlights([])
      }
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
        onChange={(e) => setPort1(e.target.value.toUpperCase())}
        placeholder="Airport's code or name"
      />
      <label htmlFor="airport2">To:</label>
      <input
        type="text"
        id="airport2"
        value={port2}
        onChange={(e) => setPort2(e.target.value.toUpperCase())}
        placeholder="Airport's code or name"
      />
      <input type="submit" />
    </form>
  )
}
export default Form
