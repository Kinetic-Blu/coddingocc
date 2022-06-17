import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './nav.css'
import './Contact.css'
import {Link, withRouter} from "react-router-dom"



class Contact extends Component{
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
       
                <div className='transport-buttons'>
                    <b> News</b>
                </div>
           
                <div className='trans-sign'>
                    <b> Sign-Up</b>
                </div> 
                <div className='trans-log'>
                    <img className="profile" src='https://i.imgur.com/mugWDO5.png'/>
                    <b className='login'>Log in</b>
                </div>
            </header>

        </section>

        <section>
            <div className='contact-header'> Contact Us</div>
        </section>
        <section className='contact-services'>
            <div className='phone'>
                <img className="contact-icons" src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png"/>
               (301) 468-8901 </div>
                <div className='phone'>
                <img className="contact-icons" src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png"/>
                Email here </div>
                {/* <div className='phone'>
                <img className="contact-icons" src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png"/>
               Hours here </div> */}
        </section>
        <section className='offices'>
            <div className='office-box'> 
            <p>Rockville, MD</p>
            <p>(301) 468-8901</p>
            <p>11820 Parklawn Dr, Ste 205,
Rockville, MD 20852</p>
            </div>
            <div className='office-box'> 
            <p>Savage, MD</p>
            <p>(301) 490-5000</p>
            <p>8840 Greenwood Pl, Ste B,
Savage, MD 20763</p>
</div>
        </section>
        <section className='offices'>
            <div className='office-box'> 
            <p>York, PA</p>
            <p>(717) 318-5174</p>
            <p>2224-A South Queen St
York, PA 17402</p>
            </div>
            <div className='office-box'> 
            <p>West McLean, VA</p>
            <p>(703) 790-4666</p>
            <p>PO BOX 3303,
West McLean, VA 22103</p>
</div>
        </section>


        <div className='filler-footer'> filler footer here</div>


        </body>
        )     
    
}
}
export default (Contact)