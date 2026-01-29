   import ProjectCard from "./ProjectCard"
 function Project(){
    const projects= [
        {title: "REACT LAB", githublink: "https://github.com/debbiemomodu/React-Lab", description: "Built a small React app to practice functional components.Used useState for managing dynamic data.Used useEffect to handle side effects like component updates.Experimented with component-based UI, conditional rendering, and list mapping.Focused on learning React fundamentals and modern frontend workflow.", tech: "HTML,  CSS, JavaScript,React" },
        {title: "MY PORTFOLIO", githubLink: "https://github.com/debbiemomodu/portfolio.git", description: " ", tech: "Tech 2"},
        {title: "Project 3", githubLink: "#", description: "Description 3", tech: "Tech 3"}
    ]

    return (
        <section id="projects" className="px-8 py-16 bg-gray-50">
               <h2 className="text-3xl font-bold text-center mb-10">
                 My Projects
               </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project,index) =>(
                    <ProjectCard 
                     key={index} 
                        title={project.title}
                        githublink={project.githublink}
                        description={project.description}
                        tech={project.tech}
                    />
                ) )}

            </div>
        </section>
    )
 }


 export default Project;