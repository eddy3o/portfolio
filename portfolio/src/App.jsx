/* eslint-disable react/no-unescaped-entities */
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Content } from './components/Content.jsx'
import { ContactButton } from './components/ContactButton.jsx'
import { useEffect, useRef, useState } from 'react'

export function App () {
    const sombraRef = useRef(null);
    const [isBlurred, setIsBlurred] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const removeBlur = async () => {
          // Espera durante 700 milisegundos (o el tiempo que desees)
          await new Promise(resolve => setTimeout(resolve, 10));
    
          // Cambia el estado para quitar el desenfoque
          setIsBlurred(false);
        };
    
        removeBlur(); // Llama a la función para quitar el desenfoque después del tiempo especificado
      }, []); 

      useEffect(() => {
        const actualizarPosicion = (e) => {
            const sombra = sombraRef.current;
            if (sombra) {
                const x = e.clientX - sombra.clientWidth / 2;
                const y = e.clientY - sombra.clientHeight / 2;
                sombra.style.transition = 'all 0.1s ease';
                sombra.style.transform = `translate(${x}px, ${y}px)`;
            }
        };
        document.addEventListener('mousemove', actualizarPosicion);
        return () => {
            document.removeEventListener('mousemove', actualizarPosicion);
        };
    }, []);

    return (
        <>
            <div className="sombreador" ref={sombraRef}></div>
            <div className={`container ${isBlurred ? 'blurred' : ''}`} ref={containerRef}>
                <Navbar />
                <Content  />
                <ContactButton />
            </div>
            <script src="script.js"></script>
        </>
    )
}

