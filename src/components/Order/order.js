export default function Order() {
    return (
        <>
            <section className="order">
                <h4 className="services-title order-title">Buyurtma berish</h4>
                <p className="services-text order-title">
                    Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                    Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
                    Vivamus mattis eros at sem pulvinar
                </p>
                <form className="form">
                    <input className="input" type="text" placeholder="Name" />
                    <input className="input" type="tel" placeholder="Phone Number" />
                    <select className="input">
                        <option selected disabled>Types</option>
                        <option value="">1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <button className="blue-btn form-btn">Buyurtma berish</button>
                </form>
            </section>
        </>
    )
}