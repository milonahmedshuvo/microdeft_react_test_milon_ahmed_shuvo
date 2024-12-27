/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardData = () => {
    const [data, setData] = useState(null)
    const token = localStorage.getItem('authToken')

    console.log('Data fetch:', data?.data?.data, 'token:', token)


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://react-interview.crd4lc.easypanel.host/api/course', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setData(response?.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])




    return (
        <div className="card-grid">
            {data?.data?.data?.slice(1, 10).map((card, i) => (
                <div key={i} className="card">
                    <div className="card-image-parent">
                       <img className="card-image" src={card.image} alt="" />
                    </div>
                   

                    <div className="card-content">
                        <div className="card-header">
                            <p className="badge-text">{card.badge_text}</p>
                            <p className="instructor-name">{card.instructor_name}</p>
                        </div>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default CardData