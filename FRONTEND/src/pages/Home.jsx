import '../assets/styles/Home.css'
import corporate1 from '../assets/images/videos/corporate 1.jpg'
import weddingdeco4 from '../assets/images/videos/wedding deco4.jpg'
import concert4 from '../assets/images/videos/concert4.jpg'
import wedding from '../assets/images/videos/wedding.jpg'
import weddingdeco6 from '../assets/images/videos/wedding deco6.jpg'

function Home(){
    return(
        <>
        <section id="home-one">
    <h4 className="home-h4">THE ART OF CREATING MOOD</h4>
    <h1 className="home-h1">Organization of Events and Celebrations of Any Scale</h1>
    <div className="numbers">
        <div className="number1">
            <h3 className="home-h3">14</h3>
            <p className="home-p">Year of experience</p>
        </div>
        <div className="number2">
            <h3 className="home-h3">347</h3>
            <p className="home-p">Events Implemented</p>
        </div>
    </div>
    <button className="home-btn">LEARN MORE</button>
 </section>
 {/* <!-- section two --> */}
 
  <section id="home-two">
    <h5 className="home-two-h5">FEW WORDS ABOUT US</h5>
    <h1 className="home-two-h1">Events Inspired By Innovation</h1>
    <p className="home-two-p">Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quasi id eius blanditiis exercitationem a unde harum animi excepturi maiores sint magni, commodi enim fugiat quam ex totam assumenda pariatur!</p>
    <button className="home-two-btn">READ MORE</button>
  </section>
    {/* <!-- section three --> */}
     <section id="home-three" className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 section-three-part">
          <img src={corporate1} alt="" className="home-three-img1"/>
          <h6 className="home-three-h6">ENTERTAINMENT</h6>
          <h6 className="home-three-h6">Fiscial year 2021 closing.</h6>
        </div>
        <div className="col-12 col-md-6 col-lg-3 section-three-part">
          <img src={weddingdeco4} alt="" className="home-three-img2"/>
          <h6 className="home-three-h6">ENTERTAINMENT</h6>
          <h6 className="home-three-h6">Electronics store in New York.</h6>
        </div>
        <div className="col-12 col-md-6 col-lg-3 section-three-part">
          <img src={concert4} alt="" className="home-three-img3"/>
          <h6 className="home-three-h6">NON PROFIT</h6>
          <h6 className="home-three-h6">Shopping center opening.</h6>
        </div>
        <div className="col-12 col-md-6 col-lg-3 section-three-part">
          <img src={wedding} alt="" className="home-three-img4"/>
          <h6 className="home-three-h6">SOCIAL</h6>
          <h6 className="home-three-h6">Wedding in a classNameic style.</h6>
        </div>
      </div>
     </section>
     {/* <!-- section four --> */}
      <section id="home-four" className="container">
         <div className="row home-four-row g-0">
          <div className="col-12 col-md-6 home-four-one">
            <img src={weddingdeco6} alt="" className="home-four-img"/>
          </div>
          <div className="col-12 col-md-6 home-four-two">
             <h4 className="home-four-h4">WHY CHOOSE US?</h4>
             <h3 className="home-four-h3">We Bring Ideas To Life</h3>
             <p className="home-four-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
         </div>
      </section>
      {/* <!-- section five --> */}
       <section id="home-five">
         <h3 className="home-five-h3">OUR SERVICES</h3>
         <h1 className="home-five-h1">What We Offer For You</h1>
         <div className="home-five-container container">
          <div className="row home-five-row">
            <div className="col-12 col-md-6 col-lg-3 home-five-col">
              <h6 className="home-five-h6">Corporate</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-five-col">
               <h6 className="home-five-h6">Entertainment</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-five-col">
               <h6 className="home-five-h6">Non-Profit</h6>
            </div>
            <div className="col-12 col-md-6 col-lg-3 home-five-col">
               <h6 className="home-five-h6">Social</h6>
            </div>
          </div>
         </div>
       </section>
       {/* <!-- section six --> */}
        <section id="home-six">
          <h4 className="home-six-h4">OUR EXPERTISE</h4>
          <h2 className="home-six-h2">Full Range Of Works</h2>
          
          <div className="row home-six-row">
            <div className="col-12 col-md-4 home-six-row-col1">
              <button className="home-six-btn1">WEDDING EVENT</button>
            </div>
            <div className="col-12 col-md-4  home-six-row-col2">
              <button className="home-six-btn2">PRIVATE PARTY</button>
            </div>
            <div className="col-12 col-md-4  home-six-row-col3">
              <button className="home-six-btn3">CORPORATE PARTY</button>
            </div>
          </div>
         
        </section>

        {/* <!-- home seven --> */}
         <section id="home-seven">
          <h4 className="home-seven-h4">NEWS FROM OUR BLOG</h4>
          <h2 className="home-seven-h2">What's Interesting To Hear?</h2>
          <p className="home-seven-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="home-seven-btn">READ ALL NEWS</button>
         </section>
         {/* <!-- home eight --> */}
          <section id="home-eight">
            <div className="container">
            <div className="home-eight-one">
               <div className="home-eight-two">
                <div className="box">BIRTHDAY</div>
                <h2 className="home-eight-h2">Decorations & lights. Trends and nuances today. Some tips.</h2>
                <p className="home-eight-p">Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus. Vestibulum ante ipsum primis in.</p>
               </div>
            </div>
            </div>
           
            
          </section>
        
        
        </>
    )
}
export default Home;