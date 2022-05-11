import React, { useState } from 'react'

function Subscription() {

    //const [input, setInput] = useState("")
    const title = "Subscribe to our newsletter"

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
    
        //setBooks(responseJSON);
        //setLoading(false);
    }

    
    /* async function fetchEmail(e){
        console.log(e.target.querySelector(`input[name="email"]`).value)

        const formData = new FormData()
        formData.append("email", e.target.querySelector(`input[name="email"]`).value)
        
    
        const fetchSettings = {
            method: 'POST',
            body: formData
        }
    
        fetch("https://demoapi.com/api/series/newsletter", fetchSettings)
        .then(async data => {
            console.log(data)
            const res = await data.json()
            console.log(res)
            console.dir(data)
        })
        .catch(err => {
            console.dir(err)
        })

        setInput()
    } */

  return (
    <div className='form'>
        {title}
        <form>
            <input type="email" placeholder='email' name="email" />
            <button onClick={fetchEmail}>Send</button>
        </form>
    </div>
  )
}

export default Subscription