import WebSite from '../../assets/img/website.png'
import Bot from '../../assets/img/bot.png'
import Smm from '../../assets/img/smm.png'
import Design from '../../assets/img/design.png'
import Crm from '../../assets/img/crm.png'

export default function Service() {
    return (
        <>
            <section className="services">
                <h2 className="services-title">Xizmatlar</h2>
                <p className="services-text">
                    Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                    lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at
                    sem pulvinar
                </p>
                <div className="services-cards">
                    <ul className="cards">

                        <li className="card">
                            <img src={WebSite} alt="website" width={203} height={130} />
                            <h3 className="card-title">Vebsayt tuzish</h3>
                            <p className="card-text">lorem ipsum</p>
                        </li>

                        <li className="card">
                            <img src={Bot} alt="telegram-bot" width={203} height={130} />
                            <h3 className="card-title">Telegram bot</h3>
                            <p className="card-text">lorem ipsum</p>
                        </li>

                        <li className="card">
                        <img src={Smm} alt="smm" width={203} height={130} />
                            <h3 className="card-title">SMM</h3>
                            <p className="card-text">lorem ipsum</p>
                        </li>

                        <li className="card">
                        <img src={Design} alt="design" width={203} height={130} />
                            <h3 className="card-title">Grafik dizayn</h3>
                            <p className="card-text">lorem ipsum</p>
                        </li>

                        <li className="card">
                        <img src={Crm} alt="crm" width={203} height={130} />
                            <h3 className="card-title">CRM tizimlar</h3>
                            <p className="card-text">lorem ipsum</p>
                        </li>

                    </ul>
                </div>
                <div className="links">
                    <button className="blue-btn">Buyurtma berish</button>
                    <a className="services-link" href="/">Xizmatlar sahifasiga o'tish</a>
                </div>
            </section>
        </>
    )
}