import React,{ useState } from 'react'
import './ViewDonor.styles.css'
import useFetch from '../../custom-hooks/useFetch';
import {Link} from 'react-router-dom'

const ViewDonors = () => {
    
    const { data: donors, loading, error} = useFetch('http://localhost:9292/donors')
    const [donation_pledge, setDonationPledge] = useState("All")

    const handleDonationPledgeChange = (e) => {
    
        setDonationPledge(e.target.value)
    }
     const filteredDonors = donors.filter((donor) => {
        if (donation_pledge === "All" || donation_pledge === donor.donation_pledge) {
            return true
        }
    })
   //console.log(filteredDonors)
      return (
          <>

          {/* <div className="main-container"> */}
          <div className="filter">
                    <h6>Filter by:</h6>
                    {/* <div className='select-container'></div> */}



<div className='select-container'>

{/* filter by donation_pledge */}
<label htmlFor="donation_pledge">DonationPledge:</label>
    <select name="donation_pledge" id="donation_pledge" onChange={handleDonationPledgeChange}>
          {/* {doctors.map(doctor => (
            <option value="experience">{ <p>{doctor.specialization}</p> }</option>
       ))} */}
        <option value="All Donors">All Donors</option>
        <option value="Clothing">Clothing</option>
        <option value="Linens">Linens</option>
        <option value="Food">Food</option>
</select>
</div>  
</div>   
{error ? <p>{error}</p> : 
          
     <div className="main-cards">
                           {loading ? <p>Loading...</p> : null}
                      {filteredDonors.map((donor) => {
                            return (
                                <div className="card-container">
                                <div className="card-text">
                                <Link to={`/donors/${donor.id}` }>
                                <p>Name: { donor.name}</p>
                                <p>DonationPledge: { donor.donation_pledge}</p>
                                <p>Phone_no: { donor.phone_number}</p>
                                </Link>
                </div>
                      
                    </div>
                            
                     
                            )
                        })
                    }  

                    </div>
}
     </>
                      
                      )                        
}

export default ViewDonors;