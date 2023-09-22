import{ Link } from 'react-router-dom' 

import hero from './image/hero.jpg'
import about from './image/home-about.jpg'
import card1 from './image/card1-icon1.png'
import card2 from './image/card1-icon2.png'
import card3 from './image/card1-icon3.png'
import tab from './image/tab1.jpg' 
import blog1 from './image/blogprev1.jpg'
import blog2 from './image/blogprev2.jpg'
import blog3 from './image/blogprev3.jpg'
import contact from './image/contact1.jpg'

export default function Home() {
  return (
    <>
      <section className='home'>
        <img src={hero} alt="hero" className="hero-img"></img>
      </section>


      {/* home about ...........................................Start */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-11 offset-md-1 mt-5">
            <div className="row">
              <div className="col-md-7">
                <h1 className=" home-heading animate-right">Made with Love</h1><br></br>
                <p><b>High Quality services since 2001, qui fabulas definitiones at, ei nibh offendit mel. Eius comprehensam ex est.Pri ei laudem invenire, has ex regione sapientem</b></p>
                <p>Lorem ipsum dolor sit amet, per no malorum aliquam utroque, vim legere eleifend an, malis delicatissimi vel te. Pro fuisset splendide vulputate an, quo eu eripuit nominati. Sit enim eius laoreet te, qui fabulas definitiones at, ei nibh offendit mel. Eius comprehensam ex est.Pri ei laudem invenire, has ex regione sapientem.</p>
              </div>
              <div className="col-md-5">
                <img src={about} alt="" className="home-about-img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-5">
        <div className="row ">
          <div className="col-md-10 offset-md-1 mb-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header text-center mb-3">
                    <img src={card1} alt="" className="home-abt-card-icon mb-2"></img>
                    <h4>Birthday Cakes</h4>
                  </div>
                  <div className="card-body text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, blanditiis tenetur? Explicabo fuga delectus excepturi quo consequatur deserunt in?</p>
                    <button className="btn btn-warning">READ MORE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card">
                  <div className="card-header text-center mb-3">
                    <img src={card2} alt="" className="home-abt-card-icon mb-2"></img>
                    <h4>Special Cakes</h4>
                  </div>
                  <div className="card-body text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, blanditiis tenetur? Explicabo fuga delectus excepturi quo consequatur deserunt in?</p>
                    <button className="btn btn-warning">READ MORE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header text-center mb-3">
                    <img src={card3} alt="" className="home-abt-card-icon mb-2"></img>
                    <h4>Cupcakes & Sweets</h4>
                  </div>
                  <div className="card-body text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, blanditiis tenetur? Explicabo fuga delectus excepturi quo consequatur deserunt in?</p>
                    <button className="btn btn-warning">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*home about...................................End  */}

      {/* service page....................................Start */}

      <div className="container-fluid mt-5 mb-5 container-service">
        <div className="row  pt-5">
          <div className="col-md-11 mt-3">
            <div className="row offset-md-2">
              <div className="col-md-4">
                <button className=" btn-lg choose-btn1">Why Choose us?</button>
              </div>
              <div className="col-md-4">
                <button className=" btn-lg choose-btn2">Our Philosophy</button>
              </div>
              <div className="col-md-4">
                <button className=" btn-lg choose-btn3">Quality Ingredients</button>
              </div>
            </div>
            <div className="row mt-5 ps-4 ms-5 pb-5">
              <div className="container  container-child ">
                <div className="row">
                  <div className="col-md-5">
                    <img src={tab} alt="" class="tab1-img "></img>
                  </div>
                  <div className="col-md-7">
                    <h1 className=" home-heading">Why Choose Us?</h1>
                    <p>Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>

                    <p><b>Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.</b></p>
                    <p>Felis tiam non metus Placerat a ultricies a, posuere lorem ipseut lincas psuiem t volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis viverra elit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* service page........................................................End */}

{/* blog code .........................................................start */}
<div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="home-heading mb-5 mt-5">Latest Blog Post..</h1>
        </div>
      </div>
  <div className="row">
    <div className="col-md-10 offset-md-1">
      <div className="row">
        <div className="col-md-4">
      <div className="card">
        <div className="card-header text-center">
          <img src={blog1} alt="" className="blog-img"></img>
          <h5>The Best Pastries for easter time</h5>
        </div>
        <div className="card-body text-center">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, blanditiis tenetur? Explicabo fuga delectus excepturi quo consequatur deserunt in?</p>
          <button className="btn btn-warning">READ MORE</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
      <div className="card-header text-center">
        <img src={blog2} alt="" className="blog-img"></img>
        <h5>Order new our Velvet cake</h5>
      </div>
      <div className="card-body text-center">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, blanditiis tenetur? Explicabo fuga delectus excepturi quo consequatur deserunt in?</p>
        <button className="btn btn-warning">READ MORE</button>
      </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
      <div className="card-header text-center">
        <img src={blog3} alt="" className="blog-img"></img>
        <h5>Cupcakes & Sweets</h5>
      </div>
      <div className="card-body text-center">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, blanditiis tenetur? Explicabo fuga delectus excepturi quo consequatur deserunt in?</p>
        <button className="btn btn-warning">READ MORE</button>
      </div>
      </div>
    </div>
</div>
    </div>
    </div>
    </div>
    <div className="container  mt-5 mb-5 p-4">
      <div className="row  contact-row p-3">
        <div className="col-md-8 p-4">
          <h2>Custom Order</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi aliquid repellendus, quis aspernatur similique iusto facere deserunt vero ullam quae. </p>
          <p>Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.</p>
          <button class="button custom-btn"><Link to="contact" className='contact-btn'>Contact Us</Link> </button>
        </div>
        <div className="col-md-3 offset-md-1">
          <img src={contact} alt="" className="order-img"></img>
        </div>
      </div>
    </div>  
    </>
  )
}