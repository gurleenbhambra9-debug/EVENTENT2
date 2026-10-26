import '../assets/styles/Services.css'

function Services(){
    return(
        <>
        {/* <!-- services one --> */}
       <section id="services-one">
        <h1 className="services-one-h1">Services</h1>
       </section>

       {/* <!-- services two --> */}
        <section id="services-two">
            <h4 className="services-two-h4">OUR AMAZING MISSION</h4>
            <h2 className="services-two-h2">What We Offer For You</h2>
            <div className="services-two-container container">
                <div className="row row1">
                    <div className="col-12 col-md-3 services-two-col">
                        <h3 className="services-two-row-h3">Conferences</h3>
                        <i className="fa fa-microphone" aria-hidden="true"></i>
                    </div>
                    <div className="col-12 col-md-3 services-two-col">
                        <h3 className="services-two-row-h3">Exhibitions</h3>
                        <i className="fa fa-cube" aria-hidden="true"></i>
                    </div>
                    <div className="col-12 col-md-3 services-two-col">
                        <h3 className="services-two-row-h3">Media</h3>
                        <i className="fa fa-wifi" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="row row2">
                    <div className="col-12 col-md-3 services-two-col">
                         <h3 className="services-two-row-h3">Brand Events</h3>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div className="col-12 col-md-3 services-two-col">
                         <h3 className="services-two-row-h3">Concerts</h3>
                        <i className="fa fa-camera" aria-hidden="true"></i>
                    </div>
                    <div className="col-12 col-md-3 services-two-col">
                         <h3 className="services-two-row-h3">Fashion</h3>
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="row row3">
                    <div className="col-12 col-md-3 services-two-col">
                         <h3 className="services-two-row-h3">Dinners</h3>
                        <i className="fa fa-apple" aria-hidden="true"></i>
                    </div>
                    <div className="col-12 col-md-3 services-two-col">
                         <h3 className="services-two-row-h3">Weddings</h3>
                        <i className="fa fa-atom" aria-hidden="true"></i>
                    </div>
                    <div className="col-12 col-md-3 services-two-col">
                         <h3 className="services-two-row-h3">Birthdays</h3>
                        <i className="fa fa-gift" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- section three --> */}
         <section id="services-three">
           <h4 className="services-three-h4">OUR PRICES</h4>
            <h2 className="services-three-h2">How Much Does It Cost?</h2>
            <div className="services-three-container container">
                <div className="services-three-row1 row">
                    
                    <div className="services-three-row1-col col-12 col-md-3">
                       <i className="fa-solid fa-building-columns" aria-hidden="true"></i>
                    </div>
                    <div className="services-three-row1-col col-12 col-md-4">
                        <h3 className="services-three-row-h3">Trade Show Exhibitions</h3>
                            <p className="services-three-row-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="services-three-row1-col col-12 col-md-3">
                        <button className="services-three-row-btn">FROM $100</button>
                    </div>
                    
                </div>

                 <div className="services-three-row2 row">
                    
                    <div className="services-three-row2-col col-12 col-md-3">
                       <i className="fa-solid fa-bullhorn" aria-hidden="true"></i>
                    </div>
                    <div className="services-three-row2-col col-12 col-md-4">
                        <h3 className="services-three-row-h3">Brand Events</h3>
                            <p className="services-three-row-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="services-three-row2-col col-12 col-md-3">
                        <button className="services-three-row-btn">FROM $200</button>
                    </div>
                    
                </div>

                <div className="services-three-row3 row">
                    
                    <div className="services-three-row3-col col-12 col-md-3">
                       <i className="fa-solid fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="services-three-row3-col col-12 col-md-4">
                        <h3 className="services-three-row-h3">Fashion Events</h3>
                            <p className="services-three-row-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="services-three-row3-col col-12 col-md-3">
                        <button className="services-three-row-btn">FROM $300</button>
                    </div>
                    
                </div>
            </div>
         </section>
        
        </>
    )
}
export default Services;