import '../assets/styles/Work.css'
import p10 from '../assets/images/p10.jpg'
import p6 from '../assets/images/p6.jpg'
import p9 from '../assets/images/p9.jpg'
import p5 from '../assets/images/p5.jpg'
import p2 from '../assets/images/p2.jpg'
import p4 from '../assets/images/p4.jpg'
import p8 from '../assets/images/p8.jpg'
import p3 from '../assets/images/p3.jpg'

function Work(){
    return(
        <>
        {/* <!-- work one --> */}
       <section id="work-one">
        <h1 className="work-one-h1">Our Portfolio</h1>
       </section>

       {/* <!-- work two --> */}
        <section id="work-two">
            <h3 className="work-two-h3">OUR AMAZING MISSION</h3>
            <h2 className="work-two-h2">Events Are Our Life</h2>
            <div className="work-two-container">
                <div className="row work-two-row1">
                    <div className="col-12 col-md-5 col-lg-3">
                      <img src={p10} alt="" className="work-two-img"/>
                      <h5 className="work-two-h5">CORPORATE</h5>  
                    </div>
                    <div className="col-12 col-md-5 col-lg-3">
                        <img src={p6} alt="" className="work-two-img"/>
                      <h5 className="work-two-h5">WEDDING</h5>
                    </div>
                    <div className="col-12 col-md-5 col-lg-3">
                        <img src={p9} alt="" className="work-two-img"/>
                      <h5 className="work-two-h5">MUSIC EVENT</h5>
                    </div>
                    <div className="col-12 col-md-5 col-lg-3">
                        <img src={p5} alt="" className="work-two-img"/>
                      <h5 className="work-two-h5">NON- PROFIT</h5>
                    </div>
                </div>

                <div className="row work-two-row2">
                    <div className="col-12 col-md-5 col-lg-3">
                      <img src={p2} alt="" className="work-two-img"/>
                      <h5 className="work-two-h5">PARTY</h5>  
                    </div>
                    <div className="col-12 col-md-5 col-lg-3">
                        <img src={p4} alt="" className="work-two-img"/>
                      <h5 className="work-two-h5">POLITICAN</h5>
                    </div>
                    <div className="col-12 col-md-5 col-lg-3">
                        <img src={p8} alt="" className="work-two-img"/>
                      <h5 className="work-two-h5">BIRTHDAY</h5>
                    </div>
                    <div className="col-12 col-md-5 col-lg-3">
                        <img src={p3} alt="" className="work-two-img"/>
                      <h5 className="work-two-h5">FASHION</h5>
                    </div>
                </div>
            </div>
        </section>
    
        
        </>
    )
}

export default Work