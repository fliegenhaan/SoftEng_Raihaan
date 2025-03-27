import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect( () => {
    const fetchExperience = async () => {
      let { data, error } = await supabase.from("experience").select("*").order("id", {ascending: false});
      if (error) {console.log("Error fetching data: ", error)}
      else setExperiences(data);
    };

    fetchExperience();
  }, []);

  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Experience</motion.h1>
      <div className="flex flex-col items-center">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex w-full max-w-5xl flex-wrap justify-between lg:w-full lg:justify-center">
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-blue-300">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div>
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 font-medium text-purple-800"
                  >
                    {skill}
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

export default Experience;