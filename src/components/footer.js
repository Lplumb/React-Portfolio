import React, { Component } from 'react'
import gitImg from './pics/GitHub-Mark-120px.png';
import linkedinImg from './pics/linkedin.png'
import Gmail from './pics/Gmail.png'

export class footer extends Component {
    render() {
        return (
        <div>
            <footer>
            <div className="container">
                <nav className="navbar text-light navbar-dark bg-dark fixed-bottom">
                    <h4>Social Links</h4>
                    <nav className="nav justify-content-center">
                        <a className="nav-link" href="https://www.linkedin.com/in/lucas-plumb-660083203/"><img src={linkedinImg} width={40} alt="linkedin"/>
                            </a>
                        <a className="nav-link" href="https://github.com/Lplumb"><img src={gitImg} width={40} alt="github"/>
                        </a>
                        <a className="nav-link" href="mailto:Lplumb091999@gmail.com"><img src={Gmail} width={40} alt="gmail"/></a>
                    </nav>
                </nav>
            </div>
        </footer>
    </div>
        )
    }
}

export default footer
