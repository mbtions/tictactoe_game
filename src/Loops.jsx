function Loops() {
    const userData = [
        {id: 1, name: "Meenakshi Bharadwaj", email: "meenakshibharadwaj747@gmail.com", age: 25},
        {id: 2, name: "Shivani Sahu", email: "shivanisahu0401@gmail.com", age: 25},
        {id: 3, name: "Yashdeep Sinha", email: "yashdeep.sinha@gmail.com", age: 30},
        {id: 4, name: "Rajeev Gosain", email: "gosainrajeev2309@gmail.com", age: 28},
        {id: 5, name: "Ravish Dubey", email: "ravish05dubey@gmail.com", age: 34},
        {id: 6, name: "Dhruvi Garg", email: "dhruvigarg@gmail.com", age: 10},
        {id: 7, name: "Deepenra Nath", email: "nath17deependra@gmail.com", age: 45},
    ];

    return (
    <div>
        <h1>Loops in JSX</h1>
        <h3>Dynamic Data</h3>
        <table border="1">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>AGE</td>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user)=>(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
              ))
            }
          </tbody>
        </table>
        <h3>Dummy Data</h3>
        <table border={1}>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>AGE</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Meenakshi</td>
              <td>meenakshi@test.com</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Anil</td>
              <td>anil@test.com</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
    </div>
    );
}

export default Loops;