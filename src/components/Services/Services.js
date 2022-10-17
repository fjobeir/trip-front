import SectionWrapper from "../SectionWrapper/SectionWrapper"
import Service from "./Service"

const Services = () => {
    const services = [
        {
            icon: 'satellite',
            title: 'Best Flights',
            content: 'Built Wicket longer admire do barton vanity itself do in it.',
            active: false
        },
        {
            icon: 'satellite',
            title: 'Best Flights',
            content: 'Built Wicket longer admire do barton vanity itself do in it.',
            active: true
        },
        {
            icon: 'satellite',
            title: 'Best Flights',
            content: 'Built Wicket longer admire do barton vanity itself do in it.',
            active: false
        },
        {
            icon: 'customization',
            title: 'Best Flights',
            content: 'Built Wicket longer admire do barton vanity itself do in it.',
            active: false
        }
    ]
    return (
        <SectionWrapper title="We Offer Best Services" tagline="Category" classes="my-5">
            {
                services.map(({ icon, title, content, active }, i) => {
                    return (
                        <div className="col-12 col-sm-6 col-lg-3" key={i}>
                            <Service title={title} content={content} icon={icon} active={active} />
                        </div>
                    )
                })
            }
        </SectionWrapper>
    )
}

export default Services