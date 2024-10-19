import { useState } from 'react'
import logo from './assets/image.png'
import './App.css'

const posts = [{id: 1, data: "happy"}]
const books = [{id: 1, data: "joy"}]
const users = [{id: 1, data: "sing"}]
function App() {
  const [items, setItems] = useState([])

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Scaling Engine</h1>
      <div className="card">
        <button style={{marginRight: "20px"}} onClick={() => setItems(users)}>
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

export default App
