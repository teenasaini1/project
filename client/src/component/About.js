import { Link } from "react-router-dom";

import about from './image/about1.jpg'
import icon1 from './image/abt-icon1.png'
import icon2 from './image/abt-icon2.png'
import icon3 from './image/abt-icon3.png'
import team1 from './image/team1.jpg'
import team2 from './image/team2.jpg'
import team3 from './image/team3.jpg'
export default function About(){
    return(
        <>
       <div className="main-box mb-5">
    <div className="overlay">
        <div className="content">
            <h1 className="display-3 bg-h1 mb-3">About Us</h1>
            <div clasNaclassNames="btn-group">
                <button className="button home-btn "><Link to="/" className="home-btn ">Home</Link>&#8739;</button>
                <button className="button home-btn button-primary active">About us</button>
            </div>
        </div>
    </div>
</div>


<div className="container mt-5 mb-5">
  <div className="row ">
    <div className="col-md-4 offset-md-1">
      <img src={about} alt=""  className="about-image"></img>
    </div>
    <div className="col-md-6">
      <h1 className="home-heading  mb-4">Quality cakes and pastries</h1>
      <p><b>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie.</b></p>
      <p>In aliquet magna nec lobortis maximus. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules, Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
      <p>&#8658; Ipuset phas ellus ac sodales Lorem ipsum dolor</p>
      <p>&#8658;  Curabitur blandit pretium interdum. Aliquam sit amet elementum odio, vel ultrices dui. Pellentesque ac odio vitae felis suscipit</p>
      <p>&#8658;    Ipuset phas ellus ac sodales Lorem ipsum dolor</p>
    </div> 
  </div>
  </div>

 <div className="container mb-5 ">
<div className="row about-card ">
  <div className="col-md-3 offset-md-1 ">
    <div className="card">
      <div className="card-header card-head text-center mb-4">
        <img src={icon1} alt="" className="card-image rounded-circle"></img>
      </div>
      <div className="card-body text-center">
        <h1>+100</h1>
        <h3>Happy Customer</h3>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-header card-head text-center mb-4">
        <img src={icon2} alt="" className="card-image rounded-circle" height={70}></img>
      </div>
      <div className="card-body text-center">
        <h1>+100</h1>
        <h3>Cake Options</h3>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-header card-head text-center mb-4">
        <img src={icon3} alt="" className="card-image rounded-circle " ></img>
      </div>
      <div className="card-body text-center">
        <h1>+100</h1>
        <h3>Deliveries Made </h3>
      </div>
    </div>
  </div>
</div>
</div>
{/* <!------------------ABOUT IMAGE END ---------------------> */}
{/*<!----------------- TEAM START -------------------------> */}
<div className="container  mb-5">
  <div className="row mb-5">
    <div className="col-md-12">
      <h1 className=" home-heading display-4 head-color">Meet Our Team</h1>
      <hr className="hr"></hr>
    </div>
  </div>
  <div className="row">
    <div className="col-md-10 offset-md-1">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header team-head">
              <img src={team1} alt="" className="team-image"></img>
            </div>
            <div className="card-body">
              <h3 className="head-color">Pooja</h3>
              <h5>Owner</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem placeat adipisci iure quaerat quod numquam explicabo eius nobis incidunt eaque tempore,</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header team-head">
              <img src={team2} alt="" className="team-image"></img>
            </div>
            <div className="card-body">
              <h3 className="head-color">Ishika</h3>
              <h5>Baker</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem placeat adipisci iure quaerat quod numquam explicabo eius nobis incidunt eaque tempore,</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header team-head">
              <img src={team3} alt="" className="team-image"></img>
            </div>
            <div className="card-body">
              <h3 className="head-color">Kiran</h3>
              <h5>Cake Expert</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem placeat adipisci iure quaerat quod numquam explicabo eius nobis incidunt eaque tempore,</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}