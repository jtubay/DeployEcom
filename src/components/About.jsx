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
                        <h2 className="color-3"><b>About Me</b></h2>
                        <p className="p-first text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis laudantium excepturi quo, iure consequatur ab, eaque repellendus tempora dolorem id facilis in accusamus sit nam expedita aspernatur! Nisi, non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure vel vero delectus ad nihil! Debitis consequatur labore facilis temporibus modi inventore earum excepturi dignissimos odit qui sint, accusantium sed.
                        </p>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam molestias dignissimos cumque accusamus consequuntur officia. Provident commodi libero iusto.</p>
                        <h3 className="color-3 social-link-text">
                            <button className="btn btn-danger">Hire me</button>

                        </h3>
                        <ul className="about-link">
                            <li><a href=""><i className="fa fa-fonticons"></i></a></li>
                            <li><a href=""><i className="fa fa-envira"></i></a></li>
                            <li><a href=""><i className="fa fa-reddit-alien"></i></a></li>
                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a href=""><i className="fa fa-youtube-play"></i></a></li>
                        </ul>

                    </div>
                        </div>
                    </div>
                </section>

            </AboutMe>
        )
    }
}


