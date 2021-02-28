import React, { Component } from "react";
// import "../../src/style.css"

import { Card, ImageHeader, CardBody } from 'react-simple-card';




export class Product extends Component {
  render() {
    return (
      <div id="product" className="text-center">
        {/* <div className="container"> */}
        {/* </div> */}
        <div className="container">
          <div className="section-title">
            <h2>Product</h2>
          </div>
        <div id="row">
          {this.props.data
          ? this.props.data.map((d, i) => (    
            <div  key={`${d.name}-${i}`} className="col-md-4 col-xs-12">
               <h3>{d.name}</h3> 
                <Card className="card" >
                  <ImageHeader className="img-card" imageSrc={d.img} />
                  <CardBody>
                    
                     {
                        d.job ? d.job.map((x, i) => (
                          
                          <ul key={i} className="list-style-service" style={{fontWeight: "bold"}}>
                            <li style={{textAlign: "left"}}>{x}</li>
                          </ul>
                        ))
                        : "..loading" }
                        {console.log(i)}

                  </CardBody>
                </Card>
           </div>
        ))
        : "loading"}  
        {console.log(this.props.data)}
         
          </div>
        </div>
      </div>
     
    );
  }
}

export default Product;


