import Hero from "../../components/Hero/Hero"
import Nav from "../../components/Nav/Nav"
import NextTrip from "../../components/NextTrip/NextTrip"
import Services from "../../components/Services/Services"
import TopDestinations from "../../components/TopDestinations/TopDestinations"

const Home = () => {
    return (
        <>
			<Nav />
            <Hero />
            <Services />
            <TopDestinations />
            <NextTrip />
		</>
    )
}

export default Home