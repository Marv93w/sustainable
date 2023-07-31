import GetStarted from '../../components/GetStarted/GetStarted';
import './Portfolio.scss'


function Portfolio() {
    return (
      <>
       <section>
        <h1>Portfolio</h1>
        <div>
            <div>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
            </div>
            <GetStarted />
        </div>
        <div>
            <div>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
            </div>
            <GetStarted />
        </div>
       </section>
       <section>
        <h1>Testimonials</h1>
        <div>
            <p>Testimony</p>
            <p>Testimony</p>
            <p>Testimony</p>
            <p>Testimony</p>
            <p>Testimony</p>
            <p>Testimony</p>
        </div>
       </section>
      </>
    );
  }
  
  export default Portfolio;