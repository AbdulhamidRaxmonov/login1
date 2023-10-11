import React, { Component } from 'react'
import Nav from '../commons/nav'
import Footer from '../commons/footer'
import '../css/firstpage.css'
export default class firstpage extends Component {
  render() {
    return (
      <div>
        <header className='header1'>
            <Nav/>
        </header>
        
            
        <Footer/> 
      </div>
    )
  }
}
