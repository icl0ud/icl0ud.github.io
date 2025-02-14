import { ProjectCard } from "./Project"

export const ProjectList = () => {
    return (
        <div>
            <h1 style={{marginBottom: "5px", color: "#ACD7EC"}}>Papers and Projects</h1>

            <ProjectCard 
                title={"EducaSim: Simulacra to Improve Teacher Readiness"}
                description={"How can we better prepare teachers-in-training to teach without compromising classrooms? Classrooms are a superposition of many things happening simultaneously. Maybe we should have them learn by tasting fragments of such a complex world."}
                teamMembers={["C. Mohne*", "N. Vo*", "D. Lee"]}
                imageUrl={"EducaSim.jpg"}
                date={"(Ongoing)"}
            />

            <ProjectCard 
                title={"Bug or artistic feature: Scaling assessment and feedback of creative student-authored graphics programs"}
                linkUrl={"CS229-paper.pdf"}
                teamMembers={["M. Li*", "C. Mohne*", "C. Piech+"]}
                award={"Nominated as one of four best papers"}
                imageUrl={"CS229-graph.png"}
                date={"CS 229: Machine Learning Final Project, 2024"}
            />

            <ProjectCard 
                title={"CJ Secret Santa"}
                linkUrl={"https://www.cj-secret-santa.com/"}
                teamMembers={["Cameron Mohne", "Jimmy Le"]}
                imageUrl={"cj-secret-santa.jpg"}
                date={"2024 - Present"}
            />
        </div>
    )

}