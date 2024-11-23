import ChatUs from '../components/HomePage/ChatUs'
import Clients from '../components/HomePage/Clients'
import Hero from '../components/HomePage/Hero'
import PriceList from '../components/HomePage/PriceList'

const HomePage = () => {
  return (
    <section>
        <Hero />
        <PriceList />
        <ChatUs />
        <Clients />
    </section>
  )
}

export default HomePage