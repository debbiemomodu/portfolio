   import ProjectCard from "./ProjectCard"
    import { useState } from "react";
 function Project(){
    const projects= [
        {title: "REACT LAB", githublink: "https://github.com/debbiemomodu/React-Lab", description: "Built a small React app to practice functional components. Used useState for managing dynamic data. Used useEffect to handle side effects like component updates. Experimented with component-based UI, conditional rendering, and list mapping.Focused on learning React fundamentals and modern frontend workflow.", tech: "HTML,  CSS, JavaScript,React" },
        {title: "MY PORTFOLIO", githublink: "https://github.com/debbiemomodu/portfolio", description: "Built a responsive and interactive web interface using React and modern JavaScript. I implemented reusable components, state management, conditional rendering, and list mapping to display dynamic data while maintaining clean and accessible UI design. ", tech: "HTML, Tailwind CSS, JavaScript, React"},
         {title: "EMPLOYEE MANAGEMENT SYSYTEM", githublink: "https://github.com/debbiemomodu/Employee-Management-System", description: "Built a responsive employee dashboard. Implemented conditional rendering to display employee status and data views. Used list mapping for dynamic employee records.", tech:"HTML, Bootstrap,CSS, JavaScript"},
        {title: "TO-DO APPLICATION", githublink: "https://todoappolere.netlify.app/", description: "Developed a task management app with controlled inputs and state management. Implemented features to add, update, and delete tasks. Ensured smooth user interactions and responsive layout.", tech: "HTML, Bootstrap, CSS, JQuery"},
        {title: "WEATHER APP", githublink: "https://github.com/debbiemomodu/weather_app", description: "Developed a weather application with API integration. Implemented features to fetch and display current weather data. Ensured responsive design and user-friendly interface.", tech: "HTML, Bootstrap,CSS, JavaScript"},
        {title: "Crea8tiv", githublink: "https://github.com/williamsdivine/cre8tive", description: "Developed a platform for creatives to discover job opportunities.Implemented reusable components for job listings and job details. Focused on usability, scalability, and clean UI design.", tech: "HTML, CSS, Bootstrap JavaScript"},
        {title: "Teachers Hub", githublink: "https://www.teachershub.com.ng/", description: "Developed a Teacher Training Session module for Teachers Hub using full CRUD operations. Enabled administrators to add, edit, update, and remove training sessions, with dynamic UI updates and structured data handling. Focused on usability, responsiveness, and clean component structure.", tech: "HTML, Bootstrap, CSS, JQuery"},
        {
  title: "WAKALINK TRAVEL",
  githublink: "https://wakalinks-147k.vercel.app/",
  description: "Built a modern travel booking website using React focused on smooth user experience and clean UI. Implemented dynamic components for destinations, listings, and navigation. Used useState and useEffect to manage data flow and handle real-time updates. Structured the app with reusable components and optimized routing for seamless page transitions.",
  tech: "HTML, Tailwind, JavaScript, React"
},
{
  title: "BECKS SCENTS",
  githublink: "https://www.becksscents.com/",
  description: "Built an e-commerce diffuser website using React with a focus on clean design and smooth shopping experience. Implemented dynamic product listings, reusable components, and interactive UI elements. Used useState for managing cart functionality and product interactions, and useEffect for handling updates and data flow.       Focused on creating a visually appealing and user-friendly storefront.",
  tech: "HTML, CSS, JavaScript, React"
}
       
    ]

  


  const [visibleCount, setVisibleCount] = useState(6); // number of cards to show initially

  const handleToggle = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(6); // collapse
    } else {
      setVisibleCount(projects.length); // expand all
    }
  };

  return (
    <section id="projects" className="px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            githublink={project.githublink}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>

      {/* Show More Button */}
      {projects.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={handleToggle}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-gray-800 transition"
          >
            {visibleCount >= projects.length ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
 


 export default Project;