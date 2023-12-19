
import cat from '../assets/bongo-cat.gif'
import computer from '../assets/computer.gif'


export function Banner() {
  return (
    <section className='banner'>
        <img className='computer' src={computer} alt="" />
        <img className='cat' src={cat} alt="" />
        <a href="" download className="download-btn">Download CV</a>
    </section>
  )
}

