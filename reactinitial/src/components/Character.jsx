import React, { useEffect, useState } from 'react'

function Character({name, details}) {

    const [info, setInfo] = useState(false)

  return (
    <div className="Characters">
        <h2>{name}</h2>
        {info ?
        <>
            <p>{details}</p>
        </> : null
        }
        <button onClick={ () => {setInfo(!info)} }>{!info ? "Show more" : "Show hide"}</button>
    </div>
  )
}

export default Character