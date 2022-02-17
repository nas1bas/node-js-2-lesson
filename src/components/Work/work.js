import StepFirst from '../../assets/img/step-1.png'
import StepSecond from '../../assets/img/step-2.png'
import StepThird from '../../assets/img/step-3.png'
import StepFourth from '../../assets/img/step-4.png'
import StepFifth from '../../assets/img/step-5.png'
export default function Work() {
    return (
        <>
            <section>
                <h3 className="services-title">Biz qanday ishlaymiz?</h3>
                <p className="services-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                    lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at
                    sem pulvinar
                </p>
                <div className="work-list">
                    <img src={StepFirst} alt="step1" width={300} height={278} />
                    <div className="content">
                        <h4 className='content-title'>Talablarni aniqlab chiqamiz</h4>
                        <p className='content-text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                    </div>
                </div>
                <div className="work-list">
                    <div className="content">
                        <h4 className='content-title'>Bir necha yechimlarni taklif qilamiz</h4>
                        <p className='content-text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                    </div>
                    <img src={StepSecond} alt="step2" width={300} height={225} />
                </div>
                <div className="work-list">
                    <img src={StepThird} alt="step3" width={300} height={260} />
                    <div className="content">
                        <h4 className='content-title'>Bir necha yechimlarni taklif qilamiz</h4>
                        <p className='content-text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                    </div>
                </div>
                <div className="work-list">
                    <div className="content">
                        <h4 className='content-title'>Talablarni aniqlab chiqamiz</h4>
                        <p className='content-text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                    </div>
                    <img src={StepFourth} alt="step4" width={300} height={172} />
                </div>
                <div className="work-list">
                    <img src={StepFifth} alt="step5" width={300} height={234} />
                    <div className="content">
                        <h4 className='content-title'>Talablarni aniqlab chiqamiz</h4>
                        <p className='content-text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                    </div>
                </div>
                <button className="work-link blue-btn">Buyurtma berish</button>
            </section>
        </>
    )
}