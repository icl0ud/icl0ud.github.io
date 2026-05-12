import { ProjectCard } from "./Project"

export const ProjectList = () => {
    return (
        <div>
            <h1 style={{marginBottom: "5px", color: "#ACD7EC"}}>Papers and Projects</h1>

            <ProjectCard 
                title={"EducaSim: Interactive Simulacra for Instructional Practice"}
                shortTitle={"EducaSim"}
                linkUrl={"https://arxiv.org/abs/2603.11444"}
                // description={"How can we better prepare teachers-in-training to teach without compromising classrooms? Classrooms are a superposition of many things happening simultaneously. Maybe we should have them learn by tasting fragments of such a complex world."}
                teamMembers={["C. Mohne*", "N. Vo*", "D. Demszky", "C. Piech"]}
                award={"Prototype award grant"}
                award2={"Research-to-Practice award grant"}
                imageUrl={"EducaSim.jpg"}
                date={"2025"}
            />

            <ProjectCard 
                title={"Bug or artistic feature: Scaling assessment and feedback of creative student-authored graphics programs"}
                shortTitle={"Bug or artistic feature?"}
                linkUrl={"CS229-paper.pdf"}
                teamMembers={["M. Li*", "C. Mohne*", "C. Piech"]}
                award={"Best project award"}
                imageUrl={"CS229-graph.png"}
                date={"CS229: Machine Learning (Fall 2023)"}
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