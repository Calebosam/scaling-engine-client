import React, { useState } from 'react'
import logo from '../assets/image.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const posts = [{id: 1, data: "happy"}]
    const books = [{id: 1, data: "joy"}]
    const users = [{id: 1, data: "sing"}]
    const [items, setItems] = useState([])
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
        <button onClick={() => setItems(books)}>
          Books Service
        </button>
        <p>
          {items?.map((el) => <ul key={el.id}> {el.data} </ul>)}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home