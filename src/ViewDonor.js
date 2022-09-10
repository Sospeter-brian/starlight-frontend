import React,{ useState} from 'react'
import './ViewDoc.styles.css';
import useFetch from '../../custom-hooks/useFetch';
import  {Link} from 'react-router-dom'

const ViewDoctors = () => {   
    
// state was here before refactoring to accomodate a custom hook useFetch
    const { data: doctors, loading, error } = useFetch('http://localhost:9292/doctors')
    const [location, setLocation] = useState("All")
    const [experience, setExperience] = useState("All Doctors")
    const [specialization, setSpecialization] = useState("All")

    
    const handleExperienceChange = (e) => {
        setExperience(e.target.value)
    }
    function handleLocationChange(e)
    {
        setLocation(e.target.value)
    }
    function handleSpecializationChange(e)
    {
        setSpecialization(e.target.value)
    }
    const filteredDoctors = doctors.filter((daktari) => {
        if (location === "All" || location === daktari.location) {
            return true
        }
    }
    ).filter((daktari) => {
        if (experience === "All Doctors" || experience === daktari.experience) {
            return true
        }
    }).filter((daktari) => {
        if (specialization === "All" || specialization === daktari.specialization) {
            return true
        }
    })
    console.log(filteredDoctors)
//  useEffect was here
    return (
        <>
            
      <div className="main-container">
          <div className="filter">
                    <h6>Filter by:</h6>
                    <div className='select-container'>

                    {/* filter by location */}
              <label htmlFor="location">Location:</label>

                        <select name="location" id="location" onChange={handleLocationChange}>
                            {/* {doctors.map(doctor => (
                                <option value="location-2">{ <p>{doctor.location}</p> }</option>
                           ))} */}
                            <option value="All">All</option>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Mombasa">Mombasa</option>
                            <option value="Nakuru">Nakuru</option>
                            <option value="Kisumu">Kisumu</option>
                         </select>
            
                    </div>
                    <div className='select-container'>
                        
                    {/* filter by years of experience */}
              <label htmlFor="experience">Experience:</label>
                        <select name="experience" id="experience" onChange={handleExperienceChange}>
                            <option value="All">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6 and more">6 and more</option>
                             {/* {doctors.map(doctor => (
                                <option value="experience">{ <p>{doctor.years_of_experience}</p> }</option>
                           ))} */}
       
                </select>
                    </div>
                    <div className='select-container'>

                    {/* filter by specialization */}
              <label htmlFor="specialization">Specialization:</label>
                        <select name="location" id="location" onChange={handleSpecializationChange}>
                              {/* {doctors.map(doctor => (
                                <option value="experience">{ <p>{doctor.specialization}</p> }</option>
                           ))} */}
                            <option value="All Doctors">All Doctors</option>
                            <option value="Dentistry">Dentistry</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Theriogenology">Theriogenology</option>
                             <option value="Ophtalmology">Ophtalmology</option>
               
                </select>
                    </div>
          </div>      
                {error ? <p>{error}</p> : 
                    
                      <div className="main-cards">
                           {loading ? <p>Loading...</p> : null}
                      {filteredDoctors.map((doctor) => {
                            return (
                                <div className="card-container">
                        <div className="location">
                                        <p>location: { doctor.location}</p>
                        </div>
                        <div className="card-img"><img src={ doctor.picture_link} alt={doctor.name} /></div>
                        <hr />
                                    <div className="card-text">
                                        <Link to={`/doctors/${doctor.id}` }>
                                        <p>Name: { doctor.name}</p>
                                        <p>Phone_no: { doctor.phone_number}</p>

                                        </Link>
                        </div>
                </div>
                            )
                        })
                    }
                    
                   
                </div>      
             }
              
      </div>
      </>
  )
}

export default ViewDoctors