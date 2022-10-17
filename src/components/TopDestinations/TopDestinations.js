import SectionWrapper from "../SectionWrapper/SectionWrapper"
import Destination from "./Destination"

const TopDestinations = () => {
    const destinations = [
        {
            image: require('../../assets/images/rome.png'),
            place: 'Rome, Italy',
            cost: '$5,300',
            duration: '10 Days Trip'
        },
        {
            image: require('../../assets/images/london.png'),
            place: 'London, UK',
            cost: '4,200 &#163;',
            duration: '8 Days Trip'
        },
        {
            image: require('../../assets/images/europe.png'),
            place: 'Full Europe',
            cost: '15,000 &euro;',
            duration: '28 Days Trip'
        },
    ]
    return (
        <SectionWrapper title='Top Destinations' tagline='Top Sellings' classes='big-margin mb-5' rowClasses="gx-5">
            {
                destinations.map(({image, place, cost, duration}, i) => {
                    return (
                        <div className="col-12 col-sm-4" key={i}>
                            <Destination image={image} cost={cost} duration={duration} place={place} />
                        </div>
                    )
                })
            }
        </SectionWrapper>
    )
}

export default TopDestinations