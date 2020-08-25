import React from 'react'
import { FooterContainer} from './Styled.jsx'



export default function Footer() {
    return (
        <FooterContainer>
            <footer className="footer">
                <div className="container">
                    
                    <div className="about-us">
                        <h2> <span className="gold">About</span><span className="gold"> us</span></h2>
                        <p>Hello Boss Babes and welcome to Nurhan! The name Nurhan literally means shining queen or light of queen. I picked this name because I want my customers to walk away with a purchase that makes them feel, radiant, light and like a Queen. 

                        </p>
                    </div>
                
                
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <p>Stay up to date</p>
                        <div className="form-element">
                            <input type="text" placeholder="Email" /><span><i className="fas fa-chevron-right"></i></span>
                        </div>
                    </div>

                    <div className="instagram">
                        <h2><span className="gold">Instagram</span></h2>
                        <div className="flex-row">
                            <img style={{height:"4rem"}}  src="img/summerfunlightgreen.jpeg" alt="insta1"/>
                            <img style={{height:"4rem"}} src="img/summerfunpink.jpeg" alt="insta2"/>
                            <img style={{height:"4rem"}} src="img/summerfunleopardblack.jpeg" alt="insta3"/>
                        </div>
                        <div className="flex-row">
                            <img style={{height:"4rem"}} src="img/summerfunleopard.jpeg" alt="insta1"/>
                            <img style={{height:"4rem"}} src="img/summerfundarkgreen.jpeg" alt="insta2"/>
                            <img style={{height:"4rem"}} src="img/summerfunpurple.jpeg" alt="insta3"/>
                        </div>
                    </div>
                    <div className="follow">
                        <h2>Follow us</h2>
                        <p>Click fellow and follow me on this journey</p>
                        <div>
                            <i className="socialI fab fa-facebook-f"></i>
                             <i className="socialI fab fa-twitter"></i>
                             <i className="socialI fab fa-instagram"></i>
                            <i className="socialI fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="rights flex-row">
                    <p className="text-gray">
                        
                        &copy;{new Date().getFullYear()} <span className="gold">Nurhan</span> Accessories - All Rights Reserved
                        
                            
                    </p>
                </div>




            </footer>


                        
       
  
                
          
            
        </FooterContainer>

    )
}


