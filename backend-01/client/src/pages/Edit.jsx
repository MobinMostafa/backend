import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'

const Edit = () => {
    const user = useLoaderData();
    // console.log(user)
    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                address: address
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  return (
      <div className='w-[100%] py-13 lg:px-[50px] px-5 flex flex-col justify-center items-center'>
     <form className='lg:w-[50%] w-[100%]' onSubmit={handleUpdate}>
       <div className='my-3'>
          <input type="text" name="name" className="input input-info" placeholder="Name here" defaultValue={user.name} />
       </div>
       <div className='my-3'>
          <input type="email" name="email" className="input input-info" placeholder="Email here" defaultValue={user.email}  />
       </div>
        <div className='my-3'>
          <input type="text" name="address" className="input input-info" placeholder="address here" defaultValue={user.address} />
       </div>
       <div>
         <button type='submit' className='btn btn-primary'>Update User</button>
       </div>
     </form>
     <div className='my-3 flex justify-end'>
       <Link to='/'> <button className='btn btn-neutral'>back</button></Link>
     </div>
   </div>
  )
}

export default Edit