import { useRef, useEffect, useState, useLayoutEffect } from 'react';

import { ContactButton } from './ContactButton.jsx';
import { Banner } from './Banner.jsx';

export function Content() {

  const colorTextRef = useRef(null);
  const [text, setText] = useState('');
  
  const stickRef = useRef(null);
  const [stick, setStick] = useState('');
  const [empty, setEmpty] = useState(true);

  const name = 'Eddy!';
  let index = -10;
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < name.length-1) {
        if (index >= -1) {
          setText((nameB) => nameB + name[index]);
        }
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);
  
  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      setEmpty(prevEmpty => !prevEmpty);
    }, 1000);
    return () => clearInterval(intervalId); // Limpieza del intervalo en la desmontada del componente
  }, []);

  useEffect(() => {
    if (empty) {
      setStick('|');
    } else {
      setStick(' ');
    }
  }, [empty]);

  return (
    <section className="content">
        <h1>Hi, I'm
          <br />
          <span className="color" ref={colorTextRef}>{text}</span>
          <span className="color" ref={stickRef}>{stick}</span>  
        </h1>
        <h2>
          Student Passionate About FullStack Web Development.
        </h2>
        <Banner />
        <ContactButton />
    </section>
  )
}


