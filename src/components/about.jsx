import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12 col-md-6"> <img src="img/sembada.png" className="img-responsive" alt=""/> </div> */}
            <div className="col-xs-12 col-md-12 col-lg-12">
              <div className="about-text">
                <h2>About Us</h2>
                <h3>PT. Sembada Perdana Insan</h3>
                <p className="sembada">{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <p className="sembada"><b>Our Vision</b> {this.props.data ? this.props.data.vision : 'loading...'}</p>
                <p className="sembada"><b>Our Missoin</b> {this.props.data ? this.props.data.mission : 'loading...'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
