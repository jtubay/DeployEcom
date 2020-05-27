import React from 'react'
import { FooterContainer} from './Styled.jsx'
import Logo from './nurhan.PNG'


export default function Footer() {
    return (
        <FooterContainer>
            <footer className="footer">
                <div className="container">
                    
                    <div className="about-us">
                        <h2>About us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio natus maxime, aliquid modi id mollitia in recusandae, molestias expedita nisi, officia at deserunt reiciendis nesciunt blanditiis quae? Reiciendis, harum porro?
                        </p>
                    </div>
                
                
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <p>Stay up to date</p>
                        <div class="form-element">
                            <input type="text" placeholder="Email" /><span><i className="fas fa-chevron-right"></i></span>
                        </div>
                    </div>

                    <div className="instagram">
                        <h2>Instagram</h2>
                        <div className="flex-row">
                            <img src="https://placehold.it/200" alt="insta1"/>
                            <img src="https://placehold.it/200" alt="insta2"/>
                            <img src="https://placehold.it/200" alt="insta3"/>
                        </div>
                        <div className="flex-row">
                            <img src="https://placehold.it/200" alt="insta1"/>
                            <img src="https://placehold.it/200" alt="insta2"/>
                            <img src="https://placehold.it/200" alt="insta3"/>
                        </div>
                    </div>
                    <div className="follow">
                        <h2>Follow us</h2>
                        <p>Blah blah blah</p>
                        <div>
                            <i class="socialI fab fa-facebook-f"></i>
                             <i class="socialI fab fa-twitter"></i>
                             <i class="socialI fab fa-instagram"></i>
                            <i class="socialI fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="rights flex-row">
                    <p className="text-gray">
                        <p>
                        &copy;{new Date().getFullYear()} Nurhan Accessories - All Rights Reserved
                        </p>
                            
                    </p>
                </div>




            </footer>


                        
       
  
                
          
            
        </FooterContainer>

    )
}


