import React from 'react'
//import "./RegDonor.styles.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegDonor = () => {

const [name, setName] = useState('')
const [phone_number, setPhone_number] = useState(17955457183)
const [donation_pledge, setDonation_pledge] = useState()

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    const donor = {name, phone_number,donation_pledge}
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
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                    </select>
                    <button type='submit' onClick={handleSubmit} className="button">Register</button>
                </div>

                </form>
                </div>
)
}

export default RegDonor;