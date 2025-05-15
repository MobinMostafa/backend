import React from 'react'

const CreateUser = () => {
  return (
   <div className='w-[100%] py-13 lg:px-[50px] px-5 flex flex-col justify-center items-center'>
     <form className='lg:w-[50%] w-[100%]'>
       <div className='my-3'>
          <input type="text" className="input input-info" placeholder="Name here" />
       </div>
       <div className='my-3'>
          <input type="email" className="input input-info" placeholder="Email here" />
       </div>
        <div className='my-3'>
          <input type="email" className="input input-info" placeholder="Email here" />
       </div>
       <div>
         <button type='submit' className='btn btn-success'>Add User</button>
       </div>
     </form>

   </div>
  )
}

export default CreateUser