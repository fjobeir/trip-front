import './Service.css'
import Satellite from '../UI/Icons/Satellite'
import Customization from '../UI/Icons/Customization'

const Service = ({ icon, title, content, active = false }) => {
    const icons = {
        satellite: <Satellite />,
        customization: <Customization />
    }
    return (
        <div className={`service text-center d-flex flex-column align-items-center ${active ? 'active' : ''}`}>
            <div className="service-content">
                <div className="icon">
                    {icons[icon]}
                </div>
                <h5 className="my-3">{title}</h5>
                <p className="color-blue text-center">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Service