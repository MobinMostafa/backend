// import {useState,useEffect} from 'react'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
 const navigate =useNavigate()
  const handleUser = (e) => {
    e.preventDefault()
    const userName = e.target.name.value;
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userName,
        email: e.target.email.value,
        address: e.target.address.value
      })
    })
     .then(res => res.json())
    //  .then(data => console.log(data))
   const showAlert = () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Hi, ${userName}`,
          text: `Welcom to our site, ${userName} is added`,
          showConfirmButton: false,
          timer: 1500
        })
   }
   showAlert()
   e.target.reset();
   navigate('/')
  }
  return (
   <div className='w-[100%] py-13 lg:px-[50px] px-5 flex flex-col justify-center items-center'>
     <form className='lg:w-[50%] w-[100%]' onSubmit={handleUser}>
       <div className='my-3'>
          <input type="text" name="name" className="input input-info" placeholder="Name here" />
       </div>
       <div className='my-3'>
          <input type="email" name="email" className="input input-info" placeholder="Email here" />
       </div>
        <div className='my-3'>
          <input type="text" name="address" className="input input-info" placeholder="address here" />
       </div>
       <div>
         <button type='submit' className='btn btn-success'>Add User</button>
       </div>
     </form>

   </div>
  )
}

export default CreateUser