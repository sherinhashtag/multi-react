import React, { Component } from 'react';
import { NavLink,Link } from "react-router-dom";
import Popup from "reactjs-popup";
import './style.css';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

export default class Home extends Component {



	 constructor() {
   super();
this.state = {
      fields: {
        name: '',
        email: '',
       
        phone: ''
      },
      errors: {},
   }
   
   this.handleChange = this.handleChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
   
   
  };
  handleChange(e) {
    const target = e.target;
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      console.log('Form data:')
      console.log(this.state.fields)
alert('Welcome ' + this.state.fields.name);


      this.props.history.push('/home');
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    


    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "*Please enter your phone.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }




  render() {
    return (
      

    	<div class="home-main">
    	  <Header></Header>
      <div className="form-blk">
                          <form onSubmit={this.onSubmit}>


                          
                             <div className="form-row">
                              <label>Full name:</label>
                              <input type="text" name="name" className="input-style" value={this.state.fields.name} onChange={this.handleChange} />
                              <div className="errorMsg">{this.state.errors.name}</div>
                            </div>
                            <div className="form-row">
                              <label>Email:</label>
                              <input type="email" name="email" className="input-style" value={this.state.fields.email} onChange={this.handleChange} />
                              <div className="errorMsg">{this.state.errors.email}</div>
                            </div>
                            <div className="form-row">
                              <label>Phone no:</label>
                              <input type="tel" name="phone" className="input-style" value={this.state.fields.phone} onChange={this.handleChange} />
                              <div className="errorMsg">{this.state.errors.phone}</div>
                            </div>
                            
                             
                           
                            <div className="form-row btn-blk two-btns-blk">
                              <button className="btn-common" type="submit">Submit</button>
                            </div>
                          </form>
                        </div>



  <div class="popup-modal"><Popup trigger={<button> Clieck here</button>} position="right center">
    <div>xx</div>
  </Popup></div>

        <Footer></Footer>
        </div>
    )
  }
}