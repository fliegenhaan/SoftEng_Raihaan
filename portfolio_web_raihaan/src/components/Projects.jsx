import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let { data, error } = await supabase.from("project").select("*").order("id", {ascending: false});
      if (error) console.error("Error fetching projects:", error);
      else setProjects(data);
    };
  
    fetchProjects();
  }, []);   

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Project</motion.h1>
      <div className="flex flex-col items-center">
        {projects.map((project, index) => (
          <div key={index} className="mb-12 flex w-full max-w-5xl flex-wrap justify-between lg:w-full lg:justify-center">
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}} className="w-full lg:w-1/4 mr-7">
                <img src={project.image_url} alt={project.title} className="w-34 h-34" />
            </motion.div>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 0.5}} className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.title} -{" "}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-300">Link to Project</a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div>
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 font-medium text-purple-800"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;