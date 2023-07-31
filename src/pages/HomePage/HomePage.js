import './HomePage.scss';
import Hero from '../../asset/images/homepage-hero.png'
import Residential from '../../asset/images/residential.png'
import Commercial from '../../asset/images/commerical.png'
import Consultation from '../../asset/images/consultation.png'
import Design from '../../asset/images/design-build.png'
import New from '../../asset/images/new-construction.png'
import Fencing from '../../asset/images/fencing.png'


function HomePage() {
  return (
    <>
      <section className='homepage'>
        <div className='homepage'>
          <img className='homepage__hero' src={Hero} alt='hero' />
        </div>
        <h1 className='homepage__header'>Our Mission</h1>
        <p className='homepage__paragraph'>
          We aim to build a strong and sustainabledesign for
          all our clients. All while ensuring quality customer
          service and the upmost integrity to all our customers
          that is always fair, efficient, and helpful.
        </p>
        <div className='homepage__servicecontainer'>
          <div className='homepage__container'>
            <img className='homepage__service' src={Residential} alt='residental service' />
            <img className='homepage__service' src={Commercial} alt='commercial service' />
            <img className='homepage__service' src={Consultation} alt='consultation service' />
          </div>
          <div className='homepage__buttoncontainer'>
            <button className='homepage__button'>Explore Service</button>
          </div>
        </div>
        <div className='hompeage__portfoliocontainer'>
          <div className='homepage__container'>
            <img className='homepage__portfolio' src={Design} alt='design builds' />
            <img className='homepage__portfolio' src={New} alt='new construction' />
            <img className='homepage__portfolio' src={Fencing} alt='fencing' />
          </div>
          <div className='homepage__buttoncontainer'>
            <button className='homepage__button'>Explore Portfolio</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
