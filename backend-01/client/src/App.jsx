import { useState,useEffect } from "react"
import Swal from "sweetalert2";

import User from "./components/User"

const App = () => {
  const [usersData, setUsersData] = useState([])
  useEffect(() => {
     fetch('http://localhost:3000/users')
       .then(res => res.json())
       .then(data => setUsersData(data)) 
  },[])

  const handleDelete = (id) => {
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(() => {
          // console.log("User deleted:", data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Deleted!",
            text: "The user has been removed successfully.",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error => console.error("Error deleting user:", error));
    }
  });
};

  
  return (
    <>
    
      <User usersData={usersData} handleDelete={handleDelete} />
    </>
  )
}

export default App