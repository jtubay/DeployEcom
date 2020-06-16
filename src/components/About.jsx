import React, { Component } from 'react'
import { AboutMe } from './Styled'
import Logo from './nurhan.PNG'

export default class About extends Component {
    render() {
        return (
            <AboutMe>
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="about-img">
                                    <img className="shape" src={Logo} alt=""/>
                                </div>
                            </div>
                    <div className="col-md-7 about-right">
                        <h2 className="color-3"><b><span className="white">About</span><span className="gold"> Me</span></b></h2>
                        <p className="p-first text-white">
                        Hello Boss Babes and welcome to Nurhan! The name Nurhan literally means shining queen or light of queen. I picked this name because I want my customers to walk away with a purchase that makes them feel, radiant, light and like a Queen. 
                        </p>
                        <p className="text-white"> Our goal at Nurhan is to offer trendy, rare and affordable products. We take pride & care in delivering fashionable products and quick shipping. Take your time and explore.</p>
                        <h3 className="color-3 social-link-text">
                            <button className="btn btn-danger">View product</button>

                        </h3>
                        <ul className="about-link">
                            <li><a href="www.jeancodes.com"><i className="fa fa-fonticons"></i></a></li>
                            <li><a href="www.jeancodes.com"><i className="fa fa-envira"></i></a></li>
                            <li><a href="www.jeancodes.com"><i className="fa fa-reddit-alien"></i></a></li>
                            <li><a href="www.jeancodes.com"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="www.jeancodes.com"><i className="fa fa-youtube-play"></i></a></li>
                        </ul>

                    </div>
                        </div>
                    </div>
                </section>

            </AboutMe>
        )
    }
}


