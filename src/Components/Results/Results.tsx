import React, { useEffect } from "react"
import { Connection } from "../../model"

interface Props {
  flights: Connection[]
}

const Results: React.FC<Props> = ({ flights }) => {
  // useEffect(() => {
  //   console.log(flights)
  // }, [flights])

  return (
    <section>
      <h1>Results of search:</h1>
      {flights[0]?.port1 && flights[0]?.port2 ? (
        <>
          <div>FROM: {flights[0]?.port1}</div>
          <div>TO: {flights[0]?.port2}</div>
        </>
      ) : (
        <div>no connections</div>
      )}
    </section>
  )
}

export default Results
