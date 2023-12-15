/* eslint-disable react/no-unescaped-entities */
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Content } from './components/Content.jsx'
import { ContactButton } from './components/ContactButton.jsx'
import { useEffect, useRef } from 'react'

export function App () {
    const sombraRef = useRef(null);

    useEffect(() => {
        const actualizarPosicion = (e) => {
        const sombra = sombraRef.current;
        if (sombra) {
            const x = e.clientX - sombra.clientWidth / 2;
            const y = e.clientY - sombra.clientHeight / 2;
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
            <div className="container">
                <Navbar />
                <Content />
                <ContactButton />
            </div>
            <script src="script.js"></script>
        </>
    )
}

