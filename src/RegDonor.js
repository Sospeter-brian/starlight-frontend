import React from 'react'
import "./RegDoc.styles.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegDoc = () => {
  // state for controlled input fields
  const [name, setName] = useState('')
  const [location, setLocation] = useState('Nairobi')
  const [license_number, setLicenceNumber] = useState(11111111)
  const [specialization, setSpecialization] = useState('Dentistry')
  const [phone_number, setPhone_number] = useState(17955457183)
  const [picture_link, setpicture_link] = useState('fygggfff')
  const [years_of_experience, setYears_of_experience] = useState(2)
  // const [toasty, setToasty] = useState(null)
  const navigate = useNavigate()
  

  // const history = useNavigate()
// handle form submission
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const doctor = {name, license_number, location, specialization, phone_number, picture_link, years_of_experience}
    // console.log(doctor)
    // notify()
    // make post request
    fetch('http://localhost:9292/doctors', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(doctor)
  
    }).then(() => {
      console.log("New doctor added successfuly");
      navigate('/viewdoc');
    })
    // history.push('/')
  }

  return (
    <div class="container">
        <form >
        <h2 class="title">Register with Us</h2>
        <div class="user-details">
        <div class="input-box">
                    <span class="details">Name</span>
                    <input value={name} placeholder="Enter your name" required onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div class="input-box">
                    <span class="details">License_number</span>
            <input value={license_number} placeholder="License_number" required onChange={(e) => { setLicenceNumber(e.target.value) }} />
                </div>
                <div class="input-box">
                    <span class="details">Location</span>
                    <select value={location} required onChange={(e) =>setLocation(e.target.value)}>
                        <option value="1">Nairobi</option>
                        <option value="2">Mombasa</option>
                        <option value="3">Nakuru</option>
                        <option value="4">Kisumu</option>
                    </select>              
                  </div>
                  <div class="input-box">
                    <span class="details">Specialization</span>
            <select value={specialization} required onChange={(e) => setSpecialization(e.target.value)}>
                        <option value="1">Dentistry</option>
                        <option value="2">Nutrition</option>
                        <option value="3">Theriogenology</option>
                        <option value="4">Ophtalmology</option>
                    </select>
                </div>
                <div class="input-box">
                    <span class="details">Phone</span>
            <input value={phone_number} required onChange={(e) => setPhone_number(e.target.value)} />
                </div>
                <div class="input-box">
                    <span class="details">Picture Link</span>
            <input value={picture_link} required onChange={(e) => setpicture_link(e.target.value)} />
                </div>
                <div class="input-box">
                    <span class="details">Years of Experience</span>
            <select value={years_of_experience} required onChange={(e) => setYears_of_experience(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6 and more</option>
                    </select>
                    </div>
                    <button type='submit' onClick={handleSubmit} className="button">Register</button>
        </div>
        </form>
    </div>

  )
}

export default RegDoc