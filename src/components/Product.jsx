import React, { Component } from "react";
// import Swiper core and required modules
// import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import "../../src/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFlip,  Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import { CardGroup } from "react-bootstrap";


SwiperCore.use([EffectFlip]);
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export class Product extends Component {
  render() {
    return (
      <div id="product" className="text-center">
        <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Product</h2>
          </div>
         
        </div>
        <div className="container">
        <div id="row">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          {this.props.data
          ? this.props.data.map((d, i) => (    
            <SwiperSlide key={i}>     
              <CardGroup>
               <h3>{d.name}</h3> 
                <Card style={{ width: '28rem' }} >
                  <Card.Img variant="top" src={d.img} />
                  <Card.Body>
                    
                     {
                        d.job ? d.job.map((x, i) => (
                          
                          <ul key={i} className="list-style-service" style={{fontWeight: "bold"}}>
                            <li>{x}</li>
                          </ul>
                        ))
                        : "..loading" }
                        {console.log(i)}

                  </Card.Body>
                </Card>
            </CardGroup>
            </SwiperSlide>
        ))
        : "loading"}  
        {console.log(this.props.data)}
          </Swiper>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Product;


