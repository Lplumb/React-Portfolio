import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import fitnessImg from "./pics/Fitness-tracker.jpg"
import noteImg from "./pics/note-taker.jpg"
import project1Image from "./pics/project1.jpg"
import project2Image from "./pics/Screenshot_1.jpg"
import Budget from "./pics/Budget-Tracker.jpg"
import Burg from "./pics/burg.jpg"

export default class Portfolio extends Component {
    render() {
        return (
        <div>
            <div className="row">
                <div className="col-lg-10 bg=light">
                    <h2>Portfolio</h2>
                </div>
            </div>
        <br/>

        {/* <!--this is there all the images are, should line them up single file vertically when the window size is too small, added edits to bottom marigin to space images out so they aren't just touching--> */}
            <div className="row">
                <div className="col-md-6 mb-3">
                    <h5>Fitness Tracker</h5>
                    <a href = "https://fathomless-plateau-55223.herokuapp.com">
                        <img src={fitnessImg} height={350} width={500} className="float-left" alt="Fitness tracker"/>
                    </a>
                </div>
            <div className="col-md-6 mb-3">
                    <h5>Note Taker</h5>
                    <a href = "https://morning-reaches-52681.herokuapp.com">
                        <img src={noteImg} height={350} width={500} className="float-left" alt="note taker"/>
                    </a>
                </div>
            </div>
                
            {/* <!--second row of images--> */}
        <div className="row">
            <div className="col-md-6 mb-3">
                <h5>DnD Spell Viewer</h5>
                <a href = "https://jarrettheller.github.io/DnD-Spells/">
                    <img src={project1Image} height={350} width={500} className="float-left" alt="project 1"/>
                </a>
            </div>
            <div className="col-md-6 mb-3">
            <h5>Tarot Card Site</h5>
                <a href = "https://www.youtube.com/watch?v=Pp_P7dYzEtw">
                    <img src={project2Image} height={350} width={500} className="float-left" alt="project 2"/>
                </a>
            </div>

        </div>

        <div className="row">
            <div className="col-md-6 mb-3">
                <h5>Budget Tracker Site</h5>
                <a href = "https://pacific-coast-12172.herokuapp.com">
                    <img src={Budget} height={350} width={500} className="float-left" alt="Budget Tracker"/>
                </a>
            </div>
            <div className="col-md-6 mb-3">
                <h5>Burger Menu</h5>
                <a href = "https://shrouded-forest-04923.herokuapp.com">
                    <img src={Burg} height={350} width={500} className="float-left" alt="project 2"/>
                </a>
            </div>

        </div>

        <div className="card">
            <div className="card-body">
            <h5 className="card-title">Other Links</h5>
            <ul>
                <li href="https://github.com/Lplumb">My Github</li>
                <li></li>
            </ul>
        
        </div>
</div>
        </div>
        )
    }
}
