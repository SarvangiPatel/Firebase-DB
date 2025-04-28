import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [data, setdata] = useState([])

  const FetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      setdata(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchData()
  }, [])

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Products</h1>
      <div className="product-grid">
        {data.map((el) => {
          return (
            <div className="product-card" key={el.id}>
              <img src={el.image} alt={el.title} className="product-image" />
              <h4 className="product-title">{el.title}</h4>
              <h6 className="product-category">{el.category}</h6>
              <p className="product-price">Rs. {el.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
