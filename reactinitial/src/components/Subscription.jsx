import React, { useState } from 'react'

function Subscription() {

    const [valid, setValid] = useState(false)

    const title = "Subscribe to our newsletter"
    
   const validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    async function fetchEmail(e) {

        const formData = new FormData()
        formData.append("email", e.target.querySelector(`input[name="email"]`).value)
    
        const fetchSettings = {
            method: 'POST',
            body: formData
        }
    
        const response = await fetch("https://demoapi.com/api/series/newsletter", fetchSettings);
        const responseJSON = await response.json();
      
        console.log(responseJSON);
    }

    function random(input) {
        console.log(input)
    }

  return (
    <div className='form'>
        {title}
        <form >
            <input type="text" placeholder='email' name="email" onChange={ ({target}) => {setValid(validateEmail(target.value))} }/>
            {valid ?
            <>
                <button type="submit" onClick={({target}) => {random(target.value)}}>Send</button>
            </> : 
                <button disabled>Send</button>
            }
        </form>
    </div>
  )
}

export default Subscription