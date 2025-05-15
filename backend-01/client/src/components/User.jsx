

const User = ( { usersData } ) => {
    const users = usersData
    // console.log(users);
  return (
    <div className="lg:px-[50px] px-[20px] py-[50px] grid lg:grid-cols-3 grid-cols-2 gap-4 items-center justify-center">
      {users.map((user) => (
        <div className="card card-dash bg-base-200 w-96" key={user.id}>
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address}</p>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
