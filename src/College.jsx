import Course from "./Course";

function College({college}) {
    return (
        <div>
        <h2 style={{color: "rgba(25, 77, 235, 1)"}}>{college.name}</h2>
        <h3 style={{color: "rgba(125, 35, 52, 1)"}}>{college.city}</h3>
        <h4 style={{color: "green"}}>Available Courses:</h4>
        <ul>
            {
                college.courses.map((course, index) => (
                <Course course={course} key={index}/>
                ))
            }
        </ul>
        </div>
    );
}

export default College;