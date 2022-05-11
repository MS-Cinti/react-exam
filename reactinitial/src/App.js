import React, { useEffect, useState } from "react"
import LoadingMask from "./components/LoadingMask"
import Character from "./components/Character"
import Subscription from "./components/Subscription"

const App = () => {

  const title = "Series Api"

  const [loading, setLoading] = useState(false)
  const [chars, setChars] = useState([])

  async function fetchCharacters() {

    const res = await fetch("https://demoapi.com/api/series/howimetyourmother")
    const resJSON = await res.json();

    console.log(resJSON)

    setChars(resJSON)
    setLoading(false)
  }

  useEffect(
    () => {
      setLoading(true)
      fetchCharacters()
    },
    []
  )


  return (
    <div className="App">
    {loading ? <LoadingMask /> :
    <>
      <h1>{title}</h1>
      {chars.map( ({name, details}) => <Character key={name} name={name} details={details} />)}
      <Subscription />
    </>
    }
    </div>
  )
}

export default App


