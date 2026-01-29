   import ProjectCard from "./ProjectCard"
 function Project(){
    const projects= [
        {title: "REACT LAB", githublink: "https://github.com/debbiemomodu/React-Lab", description: "Built a small React app to practice functional components. Used useState for managing dynamic data. Used useEffect to handle side effects like component updates. Experimented with component-based UI, conditional rendering, and list mapping.Focused on learning React fundamentals and modern frontend workflow.", tech: "HTML,  CSS, JavaScript,React" },
        {title: "MY PORTFOLIO", githublink: "https://github.com/debbiemomodu/portfolio", description: "Built a responsive and interactive web interface using React and modern JavaScript. I implemented reusable components, state management, conditional rendering, and list mapping to display dynamic data while maintaining clean and accessible UI design. ", tech: "HTML, Tailwind CSS, JavaScript, React"},
        {title: "TO-DO APPLICATION", githublink: "https://todoappolere.netlify.app/", description: "Developed a task management app with controlled inputs and state management. Implemented features to add, update, and delete tasks. Ensured smooth user interactions and responsive layout.", tech: "HTML, Bootstrap, CSS, JQuery"},
        {title: "WEATHER APP", githublink: "https://weatherappolere.netlify.app/", description: "Developed a weather application with API integration. Implemented features to fetch and display current weather data. Ensured responsive design and user-friendly interface.", tech: "HTML, Bootstrap,CSS, JavaScript"},
        {title: "Crea8tiv", githublink: "https://github.com/williamsdivine/cre8tive", description: "Developed a platform for creatives to discover job opportunities.Implemented reusable components for job listings and job details.Focused on usability, scalability, and clean UI design.", tech: "HTML, CSS, Bootstrap JavaScript"},
        {title: "Teachers Hub", githublink: "https://www.teachershub.com.ng/", description: "Developed a Teacher Training Session module for Teachers Hub using full CRUD operations. Enabled administrators to add, edit, update, and remove training sessions, with dynamic UI updates and structured data handling. Focused on usability, responsiveness, and clean component structure.", tech: "HTML, Bootstrap, CSS, JQuery"},
       
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