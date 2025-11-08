import College from "./College";

const NestingLoops = () => {
    const collegeData = [
        {
            name: "KIET Group of Institutions",
            city: "Ghaziabad",
            courses: [
                {
                    name: "B.Tech",
                    duration: "4 years",
                    eligibility: "60% or above in 12th"
                },
                {
                    name: "M.C.A",
                    duration: "2 years",
                    eligibility: "60% or above in maths"
                },
                {
                    name: "M.Tech",
                    duration: "2 years",
                    eligibility: "M.C.A or M.Sc or B.Tech"
                },
                {
                    name: "B.Pharma",
                    duration: "5 years",
                    eligibility: "60% or above in Chemistry"
                },
                {
                    name: "M.B.A",
                    duration: "2 years",
                    eligibility: "open"
                }
            ],
        },
        {
            name: "IPEM",
            city: "Mohannagar",
            courses: [
                {
                    name: "B.Tech",
                    duration: "4 years",
                    eligibility: "open"
                },
                {
                    name: "B.C.A",
                    duration: "3 years",
                    eligibility: "open"
                },
                {
                    name: "B.Arch",
                    duration: "4 years",
                    eligibility: "60% or above in maths"
                }
            ]
        },

        {
            name: "SRCASW",
            city: "Delhi",
            courses: [
                {
                    name: "BBA",
                    duration: "3 years",
                    eligibility: "open"
                }, 
                {
                    name: "B.Sc. (Honours) Computer Science",
                    duration: "3 years",
                    eligibility: "Maths in 12th with 60% or above marks"
                },
                {
                    name: "B.Sc. Food Technology",
                    duration: "3 years",
                    eligibility: "open"
                },
                {
                    name: "B.Sc. Psychology",
                    duration: "3 years",
                    eligibility: "open"
                }
            ]
        }
    ];
    return (
        <div>
            <h1>Nesting Loops in React 19</h1>
            {
                collegeData.map((college, index) => (
                <div key={index} style={{textAlign: "left", padding: "15px", margin: "20px", backgroundColor: "#ABE", borderRadius: "10px"}}>
                    <College key={index} college={college}/>
                </div>                    
                ))
            }
        </div>
    );
}

export default NestingLoops;