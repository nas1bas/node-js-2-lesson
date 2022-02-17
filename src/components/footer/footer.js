import telegram from '../../assets/img/telegram.svg'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="">
                    <h5 className="footer-title">Copyright 2020</h5>
                    <p className="footer-text">
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                        Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
                        Vivamus mattis eros at sem pulvinar tincidunt.
                    </p>
                </div>

                <ul className="navbar-list footer-list">
                    <h6 className="footer-title">Sayt sahifalari</h6>
                    <li className=" footer-item">
                        <a className=" footer-link" href="/">Bosh sahifa</a>
                    </li>
                    <li className=" footer-item">
                        <a className=" footer-link" href="/">Xizmatlar</a>
                    </li>
                    <li className=" footer-item">
                        <a className=" footer-link" href="/">Portfolio</a>
                    </li>
                    <li className=" footer-item">
                        <a className=" footer-link" href="/">Jamoa</a>
                    </li>
                    <li className=" footer-item">
                        <a className=" footer-link" href="/">Blog</a>
                    </li>
                    <li className=" footer-item">
                        <a className="footer-link" href="/">Kontaktlar</a>
                    </li>
                </ul>

                <ul className="navbar-list footer-list">
                    <h6 className="footer-title">Biz internetda</h6>
                    <li className="footer-item">
                        <a className=" footer-link" href="/">
                            <img src={telegram} alt="telegram" width={22} height="24" />
                            Telegram
                        </a>
                    </li>
                    <li className="footer-item">
                        <a className=" footer-link" href="/">
                            <img src={facebook} alt="" width={22} height={24} />
                            FaceBook
                        </a>
                    </li>
                    <li className="footer-item">
                        <a className=" footer-link" href="/">
                            <img src={instagram} alt="" width={22} height={24} />
                            Instagram
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}