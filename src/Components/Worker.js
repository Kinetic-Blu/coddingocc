import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Worker.css'
import {Link, withRouter} from "react-router-dom"



class Worker extends Component{
    render(){
        return(
        <body className='body'>
            <section> 
            <header className='transport-header'>
                <Link to={`/nav`}> <img className="trans-logo" src="https://www.transtimeexpress.com/wp-content/uploads/2020/06/Time-Express-logo.png"img/> </Link>
               
                <Link to ={'services'}>  <div className='services'>
                    <b> Services</b>
                </div> </Link>
                <Link to ={'customers'}><div>
                <img className='arrow' src='https://i.imgur.com/VoLjlGR.png'/>
                    <b className='company'> Company</b>
                </div></Link>
                <Link to ={'contact'}>
                <div className='transport-buttons'>
                    <b> Contact</b>
                </div> </Link>
                <Link to ={'Job'}>
                <div className='transport-buttons'>
                    <b> Career</b>
                </div> </Link>
       
                <Link to ={'News'}>
                <div className='transport-buttons'>
                    <b> News</b>
                </div> </Link>
           
                {/* <div className='trans-sign'>
                    <b> Sign-Up</b>
                </div> */}
                <a className='trans-sign' target="_blank" href="https://www.transtimeexpress.com/account/">Sign-Up</a>
                <div className='trans-log'>
                    <img className="profile" src='https://i.imgur.com/mugWDO5.png'/>
                    {/* <b className='login'>Log in</b> */}
                    <a className='login' target="_blank" href="https://order.mydispatch.com/Default.aspx?OfficeAccount=250478">Log in</a>
                </div>
            </header>

        </section>
        <section className='career-header'>Careers</section>

        <section>
            <div className='pitch'>
                <p className='pitch-text'>Join our growing team of qualified drivers working for a well-known and established company with over 35 years 
                of experience offering flexible schedules with access to state-of-the-art technology for all dispatch and package delivery capabilities utilizing mobile devices.</p>
                {/* <p className='pitch-desc'> Some benefits in working for us</p> */}
            </div>
        </section>
        

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
export default (Worker)