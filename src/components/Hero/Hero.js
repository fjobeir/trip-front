import traveller from '../../assets/images/traveller.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <h4 className='tagline color-orange'>Best Destinations around the world</h4>
                    <h1 className='volkhov hero-title'>Travel, enjoy<br />and live a new<br />and full life</h1>
                    <p className='color-blue'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <button type="button" className="btn btn-warning" id="hero-button">Find out more</button>
                </div>
                <div className="col-12 col-lg-6">
                    <img src={traveller} alt="Traveller girl" />
                </div>
            </div>
        </div>
    )
}

export default Hero