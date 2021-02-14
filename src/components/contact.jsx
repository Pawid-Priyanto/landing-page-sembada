import React, { Component } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';



export class Contact extends Component {

  
  render() {
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_gf3swuf', 'template_xuuye6a', e.target, 'user_WMGGFaryG0JWMqNGdTHdP')
        .then((result) => {
            console.log(result.text);
            if(result.text === 'OK'){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your email has been sent',
                showConfirmButton: false,
                timer: 1500
              })
            }
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form onSubmit={sendEmail} name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button  type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
              <div className="col-md-4  contact-info">
                <div className="contact-item">
                  <h3>Jakarta Office :</h3>
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    {this.props.data ? this.props.data.addressJakarta : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    {this.props.data ? this.props.data.phoneJakarta : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-fax"></i> Fax
                    </span>{" "}
                    {this.props.data ? this.props.data.faxJakarta : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {this.props.data ? this.props.data.email : "loading"}
                  </p>
                </div>
             </div>
             <div className="col-md-4  contact-info">
                <div className="contact-item">
                  <h3>Balikpapan Office :</h3>
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    {this.props.data ? this.props.data.addressBalikpapan : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    {this.props.data ? this.props.data.phoneBalikpapan : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {this.props.data ? this.props.data.email : "loading"}
                  </p>
                </div>
             </div>
             <div className="col-md-4  contact-info">
                <div className="contact-item">
                  <h3>Recent News</h3>
                  <a href="#about" className="page-scroll">
                  <p>
                    <span>
                      About Us
                    </span>{" "}
                  </p>
                </a>
                </div>
                <div className="contact-item">
                <a href="#services" className="page-scroll">
                  <p>
                    <span>
                      Our Services
                    </span>{" "}
                  </p>
                </a>
                </div>
                <div className="contact-item">
                <a href="#portfolio" className="page-scroll">
                  <p>
                    <span>
                      Our Product
                    </span>{" "}
                  </p>
                </a>
                </div>
             </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 PT. Sembada Perdana Insan Design by{" "}
              <a href="http://www.templatewire.com" rel="nofollow">
                Our Team
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
