import React, { Component } from 'react';
import { NavLink,Link } from "react-router-dom";
import './style.css';

export default class Header extends Component {

constructor(props) {    
    super(props)
    this.state = {
    }
  
    this.aboutPage = this.aboutPage.bind(this);
    this.homePage = this.homePage.bind(this);
    this.contactPage = this.contactPage.bind(this);
  }
  aboutPage() {
    this.props.history.push('/about');
  }
   homePage() {
    this.props.history.push('/');
  }
   contactPage() {
    this.props.history.push('/contact');
  }





  render() {
    return (
       <header className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-block">
                <div className="logo-blk">
                  <Link to="/">Bikers</Link>
                </div>
                <div className="menu-blk">
                  <ul>
                    <li><Link to="/about">About </Link></li>
                    <li><Link to="/instructions">Instructions</Link></li>
                    <li><Link to="/contact">Contact</Link></li>



                    



                   








                     
                      
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
