import { SiPython, SiCplusplus, SiC, SiHaskell, SiTailwindcss } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10,-10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          href="https://link-to-python-certificate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-yellow-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          href="https://www.sololearn.com/certificates/CC-B4ZPRVID"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiC className="text-7xl text-blue-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          href="https://www.sololearn.com/en/certificates/CC-ILAPZIQD"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCplusplus className="text-7xl text-blue-600" />
        </motion.a>
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          href="https://link-to-haskell-certificate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHaskell className="text-7xl text-purple-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          href="https://progate.com/course_certificate/c7c2f23fsg3ajw"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineConsoleSql className="text-7xl text-blue-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate" 
          href="https://progate.com/course_certificate/640c0c8fsfvrto"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          href="https://link-to-tailwind-certificate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Technologies;
