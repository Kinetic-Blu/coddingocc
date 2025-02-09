import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './about.css'
import './Contact'
import {Link, withRouter} from "react-router-dom"



class About extends Component{
    render(){
        return(
        <body className='body'>


       <div>
           <p className='meet-header'>Meet the Tran Time Express Team</p>
           </div>

 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Mona-Toosi.jpg"/>
         <p className='position'>CHIEF EXECUTIVE OFFICER</p>
           <p className='name'>MONA TOOSI</p>
     
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Ali-Sherafaddin.jpg"/>
         <p className='position'>CHIEF OPERATIONS MANAGER</p>
         <p className='name'>ALI SHERAFADDIN</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Bobby-Sharafeddin.jpg"/>
         <p className='position'>VP_OPERATIONS MANAGER</p>
         <p className='name'>BOBBY SHARAFEDDIN</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Sean-Molkara.jpg"/>
         <p className='position'>CHIEF FINANCIAL OFFICER</p>
          <p className='name'>SEAN MOLKARA</p>
        
     </div>
 </section>
 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Ben-Diyoun.jpg"/>
         <p className='position'>OFFICE MANAGER</p>
          <p className='name'>BEN DIYOUN</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/AJ-Sharafeddin.jpg"/>
         <p className='position'>REGIONAL MANAGER</p>
           <p className='name'>AJ SHARAFEDDIN</p>
      
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Scott-Smolinski.jpg"/>
         <p className='position'>LOGISTICS MANAGER</p>
          <p className='name'>SCOTT SMOLINSKI</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Scott-Kristiansen.jpg"/>
         <p className='position'>LOGISTICS MANAGER</p>
          <p className='name'>SCOTT KRISTIANSEN</p>
       
     </div>
 </section>
 <section className='trans-people'>
     <div >
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Naz-Zori.jpg"/>
         <p className='position'>ACCOUNT EXECUTIVE</p>
         <p className='name'>NAZ ZORI</p>
        
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/TC-Barbett.jpg"/>
         <p className='position'>CSR MANAGER</p>
          <p className='name'>TC BARBETT</p>
      
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Bob_white.jpg"/>
         <p className='position'>WAREHOUSE MANAGER</p>
          <p className='name'>BOB WHITE</p>
       
     </div>
     <div>
         <img className='trans-image' src="https://www.transtimeexpress.com/wp-content/uploads/2020/05/Joe-Schaufele.jpg"/>
         <p className='position'>DIRECTOR OF SPECIAL OPERATIONS</p>
          <p className='name'>JOE SCHAUFELE</p>
         
     </div>
 </section>
{/* <div className='meet-header'>
    <p>Testimonials</p>
</div> */}
 {/* <section>
     <div className='testimonial-section'>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
  
     </div>
 </section>

 <section>
     <div className='testimonial-section'>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
         <p className='testimonial'>testimonial here</p>
  
     </div>
 </section> */}
 <footer className='footer'>
    <div className='footer-left'>
<img className="trans-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"img/>
<p className='footer-cc'>Trans Time Mobile. All Rights Reserved
</p>
</div>
<div className='footer-box1'> 
    <p>Services</p>
    <p>News</p>
    <p>Career</p>
    <p>Contact</p>
   
    </div>

    <div className='footer-box2'> 
    <p>Company</p>
    <p>About</p>
    <p>History</p>
    <p>Community</p>
    <p>Site Map</p>
    </div>
    
</footer>

        </body>
        )     
    
}
}
export default (About)