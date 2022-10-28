import React from 'react'
import Header from '../Header/Header'
import './HeroSection.css'
import heroImage from '../../Assets/Images/heroImage.png'
import { Container, Row, Col } from 'reactstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';


import img1 from '../../Assets/Images/Basic1.png'
import img2 from '../../Assets/Images/basic2.png'
import img3 from '../../Assets/Images/basic3.png'

import ar1 from '../../Assets/Images/Arrow 1.png'
import ar2 from '../../Assets/Images/Arrow 3.png'



function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <>
    <div className='arrow1'>
    <img className={className} onClick={onClick} src={ar2} alt='arrow' />
    </div>
    <div className='arrow2'>
    <img className={className} onClick={onClick} src={ar2} alt='arrow' />
    </div>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <>
    
    <div className='arrow4'>
    <img className={className} onClick={onClick} src={ar1} alt='arrow' />
    </div>
    <div className='arrow3'>
    <img className={className} onClick={onClick} src={ar1} alt='arrow' />
    </div>
    </>
  );
}

function HeroSection() {
  const settings = {
    className: "center",
      centerMode: true,
      slidesToShow: 3,
      speed: 2000,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>
    <Header />
       <section className='Game_bg mb-5 pb-lg-5'>
      <div className=' hero_wrapper'>
        <Container>
        <Row>
        <Col lg='6' md='6' sm='8' >
        <div className='hero_content'>
          <p className='text-white text-left'>
            A Decentralized Gaming Hub built over
            Tezos Blockchain. 
          </p>

        </div>
          </Col>

          <Col lg='6' md='6'>
          <div className='hero_img'><img src={heroImage}   alt='hero'/></div>
          </Col>
        </Row>
        <Col lg='6' md='6'>
        <div className=''>
          <p className='text-white title'>Games</p>
          <div className='App justify-content-center align-items-md-center align-items-center '>
              <Slider {...settings}>
                   
                    <div className='game-img3'> <img src={img3} alt=''/>
                    <p className=' text-white game_name1'>Minecraft</p>
                     </div>

                    <div className='game-img1'> 
                    <img src={img1} alt=''/>
                    <p className=' text-white game_name'>The Lord of the space</p>
                    
                     </div>
                    <div className='game-img2'> 
                    <img src={img2} alt=''/> 
                    <p className='.game_name1 text-white'>CS:GO</p>
                    </div>
              </Slider>

              </div>
        </div>
        </Col>
        </Container>


      
        </div>
    </section>
  
    
    </>
 
  )
}

export default HeroSection



// <div className=''>
// <div className='text-white mt-5'>HeroSection</div>
// <div className='hero_img'><img src={heroImage}   alt='hero'/></div>