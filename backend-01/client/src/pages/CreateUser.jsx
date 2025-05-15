// import {useState,useEffect} from 'react'


const CreateUser = () => {
 
  const handleUser = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        address: e.target.address.value
      })
    })
     .then(res => res.json())
    //  .then(data => console.log(data))
   e.target.reset();
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