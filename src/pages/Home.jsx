import React from 'react'
import logo from '../assets/image.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const posts = 10
    const books = 15
    const users = 23

    const navigate = useNavigate()
  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/caleb-osam/" target="_blank">
          <img src={logo} className="logo react" alt="Scaling logo" />
        </a>
      </div>
      <h1>Scaling Engine</h1>
      <div className="card">
        <button style={{marginRight: "20px"}} onClick={() => navigate("/users")}>
          User Service
        </button>
        <button style={{marginRight: "20px"}}onClick={() => setItems(posts)}>
          Posts Service
        </button>
        <button onClick={() => navigate("/books")}>
          Books Service
        </button>
        <div >
        <div style={{display: "inline-block", width: "100px", backgroundColor: "red"}}>{users}</div>
        <div style={{display: "inline-block", width: "100px"}}>{posts}</div>
        <div style={{display: "inline-block", width: "100px"}}>{books}</div>

        </div>
        
      </div>
      <p className="read-the-docs">
        Explore the Capabilities of this app
      </p>
    </>
  )
}

export default Home