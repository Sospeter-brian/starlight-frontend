import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../custom-hooks/useFetch'


const DonorDetails = () => {
    const { id } = useParams()
    const {data: doctor, error, loading } = useFetch("http://localhost:9292/donors/" + donor.id, {
        method: 'DELETE'
    }).then(()=> {
        console.log(id)
    })

return (
    <div>
        {
            donor && (
                <div className="container">
                    {donor.name}
                    </div>
            )
        }
        <button onClick={handleDelete}>delete</button>
    </div>

)
    }

    export default DonorDetails