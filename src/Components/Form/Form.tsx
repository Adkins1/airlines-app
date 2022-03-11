import React, { useState } from "react"

const Form: React.FC = () => {
  const [fromValue, setFromValue] = useState<string>("")
  const [destValue, setDestValue] = useState<string>("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(fromValue)
    console.log(destValue)
  }

  return (
    // todo input autocomplete from array
    <form autoComplete="off" onSubmit={(e) => handleSearch(e)}>
      <h1>Flights search form</h1>
      <label htmlFor="airport1">From:</label>
      <input
        type="text"
        id="airport1"
        value={fromValue}
        onChange={(e) => setFromValue(e.target.value)}
        placeholder="Airport's code or name"
      />
      <label htmlFor="airport2">To:</label>
      <input
        type="text"
        id="airport2"
        value={destValue}
        onChange={(e) => setDestValue(e.target.value)}
        placeholder="Airport's code or name"
      />
      <input type="submit" />
    </form>
  )
}
export default Form
