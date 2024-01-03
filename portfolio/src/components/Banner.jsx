
import cat from '../assets/bongo-cat.gif'
import computer from '../assets/computer.gif'


export function Banner() {
  return (
    <section className='banner'>
        <img className='computer' src={computer} alt="" />
        <img className='cat' src={cat} alt="" />
        <a href="https://drive.google.com/uc?export=download&id=1meenbYYo_lFYy9Coo52e5y6nPxvDU4So" download className="download-btn">Download CV</a>
    </section>
  )
}

