import React, { Component } from "react";
// import Swiper core and required modules
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import "../../src/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFlip,  Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';


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
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          {this.props.data
          ? this.props.data.map((d, i) => (
            <SwiperSlide key={i} className="col-xs-12 col-lg-9 col-md-4">
           <Card className="card">
                <ImageHeader className="img-card" imageSrc={d.img} />
                <CardBody style={{textAlign: "left"}}> 
                  <ul className="list-style-service">
                     <li>{d.job}</li>
                     <li>{d.job1}</li>
                     <li>{d.job2}</li>
                  </ul>
                  </CardBody>
                <CardFooter>{d.name}</CardFooter>
             </Card>
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
