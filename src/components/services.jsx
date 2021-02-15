import React, { Component } from "react";
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import "../../src/style.css"

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="row">
        
                {
                  this.props.data ? this.props.data.map((x, i) =>(
                    <div key={`${i}`} className="col-md-4 col-xs-12">

                    {" "}
                      <h3>{x.name}</h3>
              <Card className="card">
                <ImageHeader className="img-card" imageSrc={x.img} />
                <CardBody style={{textAlign: "left"}}> 
                  <ul className="list-style-service">
                     <li>{x.job}</li>
                     <li>{x.job1}</li>
                     <li>{x.job2}</li>
                  </ul>
                  </CardBody>
                <CardFooter>{x.name}</CardFooter>
             </Card>

              </div>
                  ))
               : "loading" }
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
