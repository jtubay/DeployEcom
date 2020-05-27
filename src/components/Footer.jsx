import React from 'react'
import { FooterContainer} from './Styled.jsx'
import Logo from './nurhan.PNG'


export default function Footer() {
    return (

        // <FooterContainer  classNameName="main-footer">
        // <div classNameName="footer-middle">
        //     <div classNameName="container">
        //         <div classNameName="row">
        //             <div classNameName="col-md-4 col-sm-6 mb-1" >
        //             <h2 classNameName="company mb-3">Nurhan Accesories</h2>
        //                 <img src={Logo} classNameName="imgLogo" alt=""/>
                        
        //             </div>
        //             {/* <div classNameName="col-md-3 col-sm-6">
        //                 <h4>Lorem ipsum</h4>
        //                 <ul classNameName="list-unstyled">
        //                     <li>lorem upsim</li>
        //                     <li>lorem upsim</li>
        //                     <li>lorem upsim</li>
        //                     <li>lorem upsim</li>  
        //                 </ul>
        //             </div> */}
        //             <div classNameName="col-md-4 col-sm-6 mb-1">
                        
                        
                       
        //             <div classNameName="mb-1 mt-5 mb-3">
        //                  <i classNameName="fa fa-map-marker"><span>  123 Main St</span></i>
  
        //              </div>
     
        //              <div classNameName="mb-3">
        //                  <i classNameName="fa fa-phone"><span>  +1.555.555.5555</span></i>
                         
        //              </div>
     
        //              <div>
        //                  <i classNameName="fa fa-envelope"> <a href="mailto:support@company.com" classNameName="email">  support@company.com</a></i>

        //              </div>


        //             </div>
        //             <div classNameName="col-md-4 col-sm-6 mb-1 text-right">
        //                 <h2 classNameName="contactMe">Contact Information</h2>
        //                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, illum vero explicabo atque optio libero, consequuntur cupiditate, voluptate iure reprehenderit molestias dicta hic!</p>
        //                 <i classNameName="fab fa-2x fa-facebook-square social"></i>
        //              <i classNameName="fab fa-2x fa-instagram social"></i>
        //              <i classNameName="fab fa-2x fa-twitter-square social"></i>
        //             </div>

        //         </div>
        //         {/* footer copy */}
        //         <div classNameName="footer-bottom">
 
        //                     <p classNameName="text-xs-center text-center">
        //                         &copy;{new Date().getFullYear()} <span classNameName="compFoot">Nurhan Accessories</span> - All Rights Reserved
        //                     </p>
                        
       
        //         </div>
        //     </div>
        // </div>
        // </FooterContainer >
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
                            <img src="./images/instagram/thumb-card3.png" alt="insta1"/>
                            <img src="./images/instagram/thumb-card4.png" alt="insta2"/>
                            <img src="./images/instagram/thumb-card5.png" alt="insta3"/>
                        </div>
                        <div className="flex-row">
                            <img src="./images/instagram/thumb-card3.png" alt="insta1"/>
                            <img src="./images/instagram/thumb-card4.png" alt="insta2"/>
                            <img src="./images/instagram/thumb-card5.png" alt="insta3"/>
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


                {/* <div classNameName="footer-bottom">
                     <p classNameName="text-xs-center text-center">
                        &copy;{new Date().getFullYear()} <span classNameName="compFoot">Nurhan Accessories</span> - All Rights Reserved
                    </p>
                </div> */}


            </footer>


                        
       
  
                
          
            
        </FooterContainer>

    )
}


