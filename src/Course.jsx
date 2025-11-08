function Course({course}) {
    return (
        <li style={{padding: "10px", backgroundColor: "rgba(228, 225, 170, 1)", borderRadius: "10px", margin: "10px"}}>
            {course.name}, {course.duration}, {course.eligibility}
        </li>
        
    );
}

export default Course;