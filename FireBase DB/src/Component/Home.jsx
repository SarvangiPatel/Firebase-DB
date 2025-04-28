import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>Discover the best products at unbeatable prices.</p>
        <Link to="/dashboard"><button className="shop-btn">Shop Now</button></Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Wide Variety</h3>
          <p>Choose from a wide range of categories and products.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Checkout</h3>
          <p>Safe and fast checkout with multiple payment options.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly and reliably.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
