import React, { Component } from 'react';
import { NavLink,Link } from "react-router-dom";
import './style.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

export default class Home extends Component {
  render() {
    return (
    	<div class="home-main">
    	  <Header></Header>
      <div> Home</div>
        <Footer></Footer>
        </div>
    )
  }
}
