import React, { useEffect, useState } from "react"
import LoadingMask from "./components/LoadingMask"
import Character from "./components/Character"
import Subscription from "./components/Subscription"

const App = () => {

  const title = "Series Api"

  const [loading, setLoading] = useState(false)
  const [chars, setChars] = useState([])
  const [sub, setSub] = useState(false)

  async function fetchCharacters() {

    const res = await fetch("https://demoapi.com/api/series/howimetyourmother")
    const resJSON = await res.json();

    //console.log(resJSON)

    setChars(resJSON)
    /* setLoading(false) */ //ha itt kiszedem, akkor a setIntervalban legyen benne!
  }

  useEffect(
    () => { 
      
      setTimeout( () => {
        setLoading(false)                               //Minden ami a SetInterval-ban van az 5 mp után fog lefutni
        setTimeout( () => {                             //5mp után indul a 10mp-es késleltetés
            setSub(true)
          }, 10000)
      }, 5000);
  
      setLoading(true)
      fetchCharacters()
    },
    []
  )


let stateVar = 1   //Ez nem kell a program futásához, csak a clg megmutatja, hogy éppen milyen State-ben van az oldal
if (loading===true){
  stateVar = 1
} else {
  if (sub === false) {
    stateVar = 2
  }else{
    stateVar = 3
  }
}
console.log(stateVar)  //

  return (
    <div className="App">
    {loading ? <LoadingMask /> :
    sub ?       
      <>
        <h1>{title}</h1>
        {chars.map( ({name, details}) => <Character key={name} name={name} details={details} />)}
        <Subscription />
      </> :
      <>
        <h1>{title}</h1>
        {chars.map( ({name, details}) => <Character key={name} name={name} details={details} />)} 
      </>
    } 
    </div>
  )

}

export default App


