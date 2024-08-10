import { HERO_CONTENT } from "../assets/constants/index";
import profilePic from "../assets/raihaan.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x:0, opacity: 1, transition: { duration: 0.5, delay: delay}}
});

const Hero = () => {
  return (
    <div id="hero" className="mt-10 border-b border-neutral-900 pb-4 px-8 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-start">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-4 text-6xl font-thick tracking-tight lg:mt-16 lg:text-8xl text-white">Hi, I'm <span className="text-indigo-500">Raihaan</span></motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">Computer Science Student at ITB</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.2}} src={profilePic} alt="Raihaan" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
