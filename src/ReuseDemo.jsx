import User from "./User";

const ReuseDemo = () => {
    const userData = [
        {id: 1, name: "Meenakshi Bharadwaj", email: "meenakshibharadwaj747@gmail.com", age: 25},
        {id: 2, name: "Shivani Sahu", email: "shivanisahu0401@gmail.com", age: 24},
        {id: 3, name: "Yashdeep Sinha", email: "yashdeep.sinha@gmail.com", age: 30},
        {id: 4, name: "Rajeev Gosain", email: "gosainrajeev2309@gmail.com", age: 28},
        {id: 5, name: "Ravish Dubey", email: "ravish05dubey@gmail.com", age: 34},
        {id: 6, name: "Dhruvi Garg", email: "dhruvigarg@gmail.com", age: 4},
        {id: 7, name: "Deepenra Nath", email: "nath17deependra@gmail.com", age: 45},
    ];
    return (
        <div style={{backgroundColor: "yellow", width: "100%", padding: "10px"}}>
            {
                userData.map((user) => (
                    <User key={user.id} user={user}/>
                ))
            }
        </div>
    );
};

export default ReuseDemo;