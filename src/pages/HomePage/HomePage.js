import './HomePage.scss';
import Hero from '../../asset/images/homepage-hero.png'


function HomePage() {
  return (
    <>
    <div>
      <img src={Hero} alt='hero' />
    </div>
      <h1>Our Mission</h1>
      <p>
        We aim to build a strong and sustainabledesign for 
        all our clients. All while ensuring quality customer 
        service and the upmost integrity to all our customers 
        that is always fair, efficient, and helpful.
      </p>
      <div>
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
        <div>
          <button>Explore Service</button>
        </div>
      </div>
      <div>
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
        <div>
          <button>Explore Portfolio</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
