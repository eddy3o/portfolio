/* eslint-disable react/no-unescaped-entities */
import './App.css'
import { Content } from './components/Content.jsx'
import { ContactButton } from './components/ContactButton.jsx'
import { NeonBox } from './components/NeonBox.jsx'
import { useEffect, useRef, useState } from 'react'

export function App () {
    const sombraRef = useRef(null);
    const [isBlurred, setIsBlurred] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const removeBlur = async () => {
        await new Promise(resolve => setTimeout(resolve, 10));

        setIsBlurred(false);
    };

    removeBlur(); // Llama a la función para quitar el desenfoque después del tiempo especificado
    }, []); 

    useEffect(() => {
        const sombra = sombraRef.current;
        if (sombra) {
            const handleMouseMove = (e) => {
                const x = e.clientX - sombra.clientWidth / 2;
                const y = e.clientY - sombra.clientHeight / 2;
            
                sombra.style.transition = 'all 0.1s ease';
                sombra.style.transform = `translate(${x}px, ${y}px)`;
            };
            document.addEventListener('mousemove', handleMouseMove);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    return (
        <>
            <aside className='sombreador' ref={sombraRef}></aside>
            <section className='container-wrapper'>
                <NeonBox />
                <div className={`container ${isBlurred ? 'blurred' : ''}`} ref={containerRef}>
                    <Content  />
                    <ContactButton />
                </div>
            </section>
            <script src="script.js"></script>
        </>
    )
}

