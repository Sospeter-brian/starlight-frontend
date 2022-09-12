import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../custom-hooks/useFetch'


const DonorDetails = () => {

    const { id } = useParams()
    const {data: donor, error, loading } = useFetch('https://starlight-foundation.herokuapp.com/donors' + donor.id)
        const handleDelete = () => {
            fetch('https://starlight-foundation.herokuapp.com/donors' + donor.id, {
                method: 'DELETE'
            }).then(()=>{
                console.log(id)
            })
        }
        

        
    
return (
    <div>
        {
            donor
            // donor && (
            //     <div className="container">
            //         <div className="img"> {donor.name}
            //        </div>
            //         </div>
            // )
        }
        <button onClick={handleDelete}>delete</button>
    </div>

)
    }

    export default DonorDetails