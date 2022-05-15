import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'

function Character({name, details}) {

  const [info, setInfo] = useState(false)

  return (
    <div className="characters">
        <h2>{name}</h2>
        {info ?
        <>
          <p>{details}</p>
        </> : null
        }
        <Button variant="outlined" onClick={ () => {setInfo(!info)} }>{!info ? "Show more" : "Show hide"}</Button>
    </div>
  )
}

export default Character