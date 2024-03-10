
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import './App.css'
import Content from './components/Content'

function App() {

  const [point, setPoint] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          ref={ref}
          className="ball"
          animate={{ x: point.x, y: point.y }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 200,
            restDelta: 0.001
          }}
        />
      </motion.div>
      <section className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="box"
        >
          
          <Content />
        </motion.div>
      </section>
    </>
  )
}

export default App
