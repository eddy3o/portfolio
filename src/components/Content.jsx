/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import ContactButton from "./ContactButton"
import Computer from "../assets/computer.gif"
import Cat from "../assets/bongo-cat.gif"


const Content = () => {
    const handleDownload = () => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1JyIkLE83heW12NIHdg_ucjWJkYJIyFgn';
      };
    

  return (
    <>  
        <motion.div
            initial={{ x: -1000, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{ 
                duration: 1, 
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 30,
            }}
        >
            <h2>Hi, I'm</h2>
        </motion.div>
        <motion.div
            initial={{ x: 1000, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{ 
                duration: 1, 
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 30,
            }}
        >
            <h1><span className="name">Eddy<span className="simbol">!</span></span></h1>
        </motion.div>
        <motion.div
            initial={{ x: -1000, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{ 
                duration: 1, 
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 30,
            }}
        >
            <h3>
            Student Passionate About FullStack Web Development.
            </h3>
        </motion.div>
        <motion.div 
            initial={{ x: 1000, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{ 
                duration: 1, 
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 30,
            }}
        >
            <section className="imageContainer">
                <img src={Computer} alt="Computer" className="computer"/>
                <section className="catCV">
                    <img src={Cat} alt="Cat" className="cat"/>
                    <button onClick={handleDownload}>Download CV</button>
                </section>
            </section>
        </motion.div>
        
        <ContactButton/>
    </>
  )
}

export default Content
