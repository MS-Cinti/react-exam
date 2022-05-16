import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import LoadingMask from './LoadingMask'

function Subscription() {

    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [showForm, setShowForm] = useState(true)
    const [showSubscribedMessage, setShowSubscribedMessage] = useState(false)
    const [subLoading, setSubLoading] = useState(false)

    const title = "Subscribe to our newsletter"
    
   const validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    async function fetchEmail(e) {
        e.preventDefault(); // Submit esemény automatikusan (by default) újratölti az oldalt, ez a sor ezt megakadályozza
        setShowForm(false) //a gombra kattintás után eltűnteti a formot (fetch előtt)
        setSubLoading(true)

        console.log(inputValue) 

        const fetchSettings = {
            method: 'POST',
            body: {
                email: inputValue
            }
        }

        console.log(fetchSettings)
    
        const response = await fetch("https://demoapi.com/api/series/newsletter", fetchSettings);
        const responseJSON = await response.json();
        console.log(responseJSON); 

        if(responseJSON.done === true){
            setSubLoading(false)
            setShowSubscribedMessage(true) //sikeres fetch válasz után kiírja, hogy Subscribed
        }

        setTimeout( () => {   //5mp után a Subscribed felirat eltűnik
            setShowSubscribedMessage(false)
        }, 5000)
    }

    function onChangeFunctions(target) { 
        setValid(validateEmail(target.value)) //ez nézi meg, hogy valid-e az email cím, ami a button klikkelhetőségéhez kell
        setInputValue(target.value) //ez beállítja az input value state-et a beírt value alapján arra az email címre, amit postolunk
    }

    return (
    <>
    {showForm ?
        <div className="subscription">
            {title}
            <form >
                <TextField id="filled-basic" label="Filled" variant="filled" type="text" placeholder='email' name="email" value={inputValue} onChange={ ({target}) => {onChangeFunctions(target)} }/>
                {valid ?
                <>
                    <Button variant="contained" onClick={(e) => {fetchEmail(e)}}>Send</Button>
                </> : 
                    <Button variant="contained" disabled>Send</Button>
                }
            </form>
        </div> :
        subLoading ?
            <LoadingMask /> :
            showSubscribedMessage ?
            <h3>Subscribed</h3>:
            <></>
    }
    </>
  )
}

export default Subscription


//onChange={ ({target}) => {setValid(validateEmail(target.value))} }