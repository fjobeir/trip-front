import Hero from "../../components/Hero/Hero"
import Nav from "../../components/Nav/Nav"
import Services from "../../components/Services/Services"
import TopDestinations from "../../components/TopDestinations/TopDestinations"

const Home = () => {
    return (
        <>
			<Nav />
            <Hero />
            <Services />
            <TopDestinations />
		</>
    )
}

export default Home