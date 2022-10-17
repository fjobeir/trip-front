const SectionWrapper = ({tagline, title, children, classes = '', rowClasses = ''}) => {
    return (
        <div className={`container ${classes}`}>
            <div className="row">
                <div className="col text-center">
                    <div className="uppercase color-blue font-light">{tagline}</div>
                    <h3 className="volkhov mt-3 mb-4">{title}</h3>
                </div>
            </div>
            <div className={`row ${rowClasses}`}>
                {children}
            </div>
        </div>
    )
}

export default SectionWrapper