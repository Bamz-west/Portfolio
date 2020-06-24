import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Particles from 'react-particles-js';


// import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import particleOptions from './assets/particles';


library.add(fab, faEnvelope, faCoffee);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'bamise west',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About me'
      },
      portfolio: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      contact: {
        title: 'Let\'s talk'
      }
    }
  }

  render() {
    return (
      <div>

        <Particles className='particles'
          params={particleOptions}
        />
        <Router>
          <Container className='p-0' fluid={true}>
            
            <NavBar className='' bg="transparent" expand="lg">
              <NavBar.Brand className="custom-2">Bamise Adeolu</NavBar.Brand>

              <NavBar.Toggle className="border-0 bg-white" aria-controls="navbar-toggle" />
              <NavBar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link custom-2" to="/">Home</Link>
                  <Link className="nav-link custom-2" to="/about">About</Link>
                  <Link className="nav-link custom-2" to="/portfolio">Portfolio</Link>
                  <Link className="nav-link custom-2" to="/contact">Contact</Link>

                </Nav>
              </NavBar.Collapse>
            </NavBar>
            
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
            <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} /> } />
            <Route path="/portfolio" exact render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text} /> } />
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} /> } />

            
          </Container>
        </Router>

      </div>
    );
  }
}

export default App;
