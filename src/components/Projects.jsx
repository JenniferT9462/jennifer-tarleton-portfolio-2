

// const Projects = () => {
//     return (
//       <section id="projects" className="py-20 text-white">
//         <div className="max-w-6xl text-center">
//           <h2 className="text-3xl font-bold mb-6">My Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="border p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4">Project Title</h3>
//               <p className="text-lg mb-4">Description of the project goes here. You can mention the tech stack and the problem it solves.</p>
//               <button className="btn btn-primary">View Project</button>
//             </div>
//           </div>
//             {/* Add more project cards */}
          
//         </div>
//       </section>
//     )
//   }
  
//   export default Projects

const projects = [
  {
    title: "Anna's World",
    description:
      "A website about a kid YouTuber where you can shop for their merchandise, play mini-games, look at their projects and learn about the YouTuber and what they are up to.",
    github: "https://github.com/JenniferT9462/Annas-World",
    deployed: "https://jennifert9462.github.io/Annas-World/",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/annasWorld.png", 
  },
  {
    title: "Knitting App",
    description: "A knitting app to manage knitting projects and get inspiration for future projects.",
    github: "https://github.com/JenniferT9462/The-Knitting-App",
    deployed: "https://jennifert9462.github.io/The-Knitting-App/",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/knittingApp.png", 
  },
  {
    title: "Planner App",
    description: "This project is a Planner App that is similar to a Bullet Journal. Users can login and be able to add events to a calender, add TODOs to a task list, track progress on tasks, track habits or activities that will be visualized with a pie graph and a mood tracker with journal entries.",
    github: "https://github.com/JenniferT9462/Planner-App",
    deployed: "https://capstone-demo-ruddy.vercel.app/",
    tech: ["Next.js", "Node.js", "Upstash"],
    image: "/plannerApp.png", 
  },
  {
    title: "Brew Haven",
    description: "Brew Haven is an e-commerce site enabling users to browse products, add items to their cart, checkout cart, and signup/login to save their cart and order history.",
    github: "https://github.com/JenniferT9462/coffee-shop-frontend",
    deployed: "https://coffee-shop-frontend-eight.vercel.app/",
    tech: ["MongoDB", "Express.js", "React", "Next.js", "Node.js"],
    image: "/coffeeShop.png", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="text-white py-12 px-4">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              // className="flex shadow-lg rounded-lg overflow-hidden"
              className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image on the left */}
              <img
                src={project.image}
                alt={project.title}
                // className="w-1/2  h-full"
                className="w-full md:w-1/2 h-60 object-cover"
              />
              {/* Content on the right */}
              {/* <div className="p-6 flex-1"> */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <div className="mt-4">
                  <p className="text-md font-semibold mb-2">Technologies:</p>
                  {/* <ul className="flex flex-wrap justify-center gap-2"> */}
                  <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                    {project.tech.map((tech, idx) => (
                      <li
                        key={idx}
                        className="bg-violet-600 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex space-x-4 justify-center"> */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 text-white hover:text-teal-400 bg-teal-700 p-2 rounded-md text-sm"
                    >
                    View Github Repo
                    </a>
                    <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="mt-8 text-white hover:text-teal-400 bg-teal-700 p-2 rounded-md"
                    className="text-white hover:text-teal-400 bg-teal-700 py-2 px-4 rounded-md text-sm"
                    >
                    View Deployed Site
                    </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

  