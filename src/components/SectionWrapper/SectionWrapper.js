const SectionWrapper = ({tagline, title, children}) => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col text-center">
                    <div className="uppercase color-blue font-light">{tagline}</div>
                    <h3 className="volkhov mt-3 mb-4">{title}</h3>
                </div>
            </div>
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export default SectionWrapper