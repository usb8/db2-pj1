import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../src/components/Card'

function App() {
  const [burgers, setBurgers] = useState(null)

  const fetchData = async () => {
    const burgerData = await axios.get('http://localhost:3001/burgers')
    const data = Object.keys(burgerData.data.data).map(burger => burgerData.data.data[burger])
    setBurgers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Favorite Burgers</h1>

      <div>
        {burgers?.map(burger => <Card key={burger.id} burger={burger}/>)}
      </div>
    </div>
  );
}

export default App