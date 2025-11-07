function User({user}) {
    return (
        <div style={{backgroundColor: "black", color: "white", borderRadius: "10px", padding: "10px", margin: "10px"}}
        >
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email Id: {user.email}</p>
        </div>
    );
};

export default User;