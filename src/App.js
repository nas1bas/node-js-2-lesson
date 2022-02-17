import './App.scss'
import Footer from './components/footer/footer'
import Header from "./components/Header/header"
import Hero from "./components/Hero/hero"
import Order from './components/Order/order'
import Service from "./components/Sevice/service"
import Work from "./components/Work/work"


export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Service />
            <Work />
            <Order />
            <Footer />
        </>
    )
}
