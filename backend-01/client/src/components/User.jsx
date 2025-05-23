import { Link } from "react-router-dom";


const User = ( { usersData, handleDelete } ) => {
    const users = usersData
    // console.log(users);
  return (
    <div className="lg:px-[50px] px-[20px] py-[50px] grid lg:grid-cols-3 grid-cols-2 gap-4 items-center justify-center">
      {users.map((user) => (
        <div className="card card-dash bg-base-200 w-96" key={user._id}>
          <div className="card-body">
            <h2 className="card-title">Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
             <div className="card-actions justify-end mt-4 cursor-pointer gap-4">
               <Link to={`/update/${user._id}`}><button className="btn btn-success">Edit</button></Link>  
               <button className="btn btn-error" onClick={() => handleDelete(user._id)}>delete</button>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
