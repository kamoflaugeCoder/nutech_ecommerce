import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage(){
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Welcome to
                    <span> NuTECH</span>
                </h1>
                <p className="h-sub=text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum tempora vel illo consequatur vero sunt nisi ipsum ipsam error neque quasi dolor omnis voluptates aut, tenetur hic minima molestias itaque.
              </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>


                </div>
         
            </header>
        </div>
    )
}

export default HomePage;