import { useState,useEffect } from "react"
import Nav from "./components/Nav"
import User from "./components/User"

const App = () => {
  const [usersData, setUsersData] = useState([])
  useEffect(() => {
     fetch('http://localhost:3000/users')
       .then(res => res.json())
       .then(data => setUsersData(data)) 
  },[])
  
  return (
    <>
      <Nav/>  
      <User usersData={usersData} />
    </>
  )
}

export default App