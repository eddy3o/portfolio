import { useEffect, useRef } from 'react'

export function NeonBox() {
    const boxRef = useRef(null);

    useEffect(() => {
        const box = boxRef.current;
        if (box) {
          const colors = [
            '#ccff33', '#33ffcc', '#ff6666', '#66ff66',
            '#6666ff', '#ffcc66', '#cc66ff', '#66ccff',
            '#ff99cc', '#ccff66', '#ffccff', '#ccffcc',
            '#ffcccc', '#ccccff', '#ffff00', '#00ff00',
            '#00cc00', '#0000ff', '#cc0000', '#ff0000',
            '#990000', '#00ccff', '#ffcc00', '#00ffcc',
            '#ff3399', '#66ff00', '#6600ff', '#ffcc99',
            '#cc99ff', '#00ffcc', '#00ccff', '#ff6633',
            '#ff3366', '#33ff66', '#3366ff', '#ffcc33',
            '#cc33ff', '#33ffcc', '#3399ff', '#ff6666',
            '#66ff66', '#6666ff', '#ffcc66', '#cc66ff',
            '#66ccff', '#ff99cc', '#ccff66', '#ffccff',
            '#ccffcc', '#ffcccc', '#ccccff', '#ffff00',
            '#00ff00', '#00cc00', '#0000ff', '#cc0000',
            '#ff0000', '#990000', '#00ccff', '#ffcc00',
            '#00ffcc', '#ff3399', '#66ff00', '#6600ff',
            '#ffcc99', '#cc99ff', '#00ffcc', '#00ccff',
            '#ff6633', '#ff3366', '#33ff66', '#3366ff',
            '#ffcc33', '#cc33ff', '#33ffcc', '#3399ff',
            '#ff6666', '#66ff66', '#6666ff', '#ffcc66',
            '#cc66ff', '#66ccff', '#ff99cc', '#ccff66',
            '#ffccff', '#ccffcc', '#ffcccc', '#ccccff',
            '#ffff00', '#00ff00', '#00cc00', '#0000ff',
            '#cc0000', '#ff0000', '#990000', '#00ccff',
            '#ffcc00', '#00ffcc', '#ff3399', '#66ff00',
            '#6600ff', '#ffcc99', '#cc99ff', '#00ffcc',
            '#00ccff', '#ff6633', '#ff3366', '#33ff66',
            '#3366ff', '#ffcc33', '#cc33ff', '#33ffcc',
            '#3399ff', '#ff6666', '#66ff66', '#6666ff',
            '#ffcc66', '#cc66ff', '#66ccff', '#ff99cc',
            '#ccff66', '#ffccff', '#ccffcc', '#ffcccc',
            '#ccccff', '#ffff00', '#00ff00', '#00cc00',
            '#0000ff', '#cc0000', '#ff0000', '#990000',
            '#00ccff', '#ffcc00', '#00ffcc', '#ff3399',
            '#66ff00', '#6600ff', '#ffcc99', '#cc99ff',
            '#00ffcc', '#00ccff', '#ff6633', '#ff3366',
            '#33ff66', '#3366ff', '#ffcc33', '#cc33ff',
            '#33ffcc', '#3399ff', '#ff6666', '#66ff66',
            '#6666ff', '#ffcc66', '#cc66ff', '#66ccff',
            '#ff99cc', '#ccff66', '#ffccff', '#ccffcc',
            '#ffcccc', '#ccccff', '#ffff00', '#00ff00',
            '#00cc00', '#0000ff', '#cc0000', '#ff0000',
            '#990000', '#00ccff', '#ffcc00', '#00ffcc'
          ];
          
            let currentIndex = 0;

            const changeColor = () => {
              const neonColor = colors[currentIndex];
              box.style.borderColor = neonColor;
              box.style.boxShadow = `0 0 10px ${neonColor}, 0 0 20px ${neonColor}`;
              currentIndex = (currentIndex + 1) % colors.length;
            };

            const intervalId = setInterval(changeColor, 700);

            return () => clearInterval(intervalId);
        }
    }, []);

  return (
    <aside className='box'  ref={boxRef}></aside>
  )
}

