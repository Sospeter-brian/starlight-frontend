import React from 'react'
import "./RegDonor.styles.css"
import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'

const RegDonor = () => {

const [name, setName] = useState('')
const [phone_number, setPhone_number] = useState()
const [donation_pledge, setDonation_pledge] = useState()

//const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    const donor = {name, phone_number, donation_pledge}
    console.log(donor)

    fetch('https://starlight-foundation.herokuapp.com/donors', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(donor)
  
    }).then(() => {
      console.log("New donor added successfuly");
     // navigate('/viewdoc');
    })
    // history.push('/')
}
return(
    <div class="container">
        <form >
        <h2 class="title">Register Here</h2>
        <div class="user-details">
        <div class="input-box">
                    <span class="details">Name</span>
                    <input value={name} placeholder="Enter your name" required onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                </div>

                <div class ="input-box">
                    <span class="details">Phone</span>
                    <input value={phone_number} required onChange={(e) => setPhone_number(e.target.value)} />
                </div>

                <div class="input-box">
                    <span class="details">Donation Pledge</span>
            <select value={donation_pledge} required onChange={(e) => setDonation_pledge(e.target.value)}>
                        <option value="1">Clothing</option>
                        <option value="2">Linens</option>
                        <option value="3">Food</option>
                        {/* <option value="4"></option> */}
                    </select>
                    <button type='submit' onClick={handleSubmit} className="button">Register</button>
                    
                </div>

                </form>
                </div>
)
}

export default RegDonor;