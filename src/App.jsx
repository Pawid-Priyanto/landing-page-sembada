import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Product from './components/Product';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Card} />
        <Product data={this.state.landingPageData.Product} />
        <Contact data={this.state.landingPageData.Contact} />
        {/* <Team data={this.state.landingPageData.Team} /> */}
        {/* <Gallery /> */}
        {/* <Features data={this.state.landingPageData.Features} /> */}
      </div>
    )
  }
}

export default App;

// unused