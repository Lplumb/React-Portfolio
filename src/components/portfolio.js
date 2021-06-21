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
                    <p className="float-left">A simple site that can keep track of your work outs, it uses mongoDB for all of its data storage.</p>
                    <a href="https://github.com/Lplumb/Fitness-Tracker">Github Repo</a>
                </div>
                <div className="col-md-6 mb-3">
                    <h5>Note Taker</h5>
                    <a href = "https://morning-reaches-52681.herokuapp.com">
                        <img src={noteImg} height={350} width={500} className="float-left" alt="note taker"/>
                    </a>
                    <p className="float-left">An app that allows you to take notes using express. You can also delete these notes as well.</p>
                    <a href="https://github.com/Lplumb/Note-Taker">Github Repo</a>
                </div>
                
            </div>
                
            {/* <!--second row of images--> */}
        <div className="row">
            <div className="col-md-6 mb-3">
                <h5>DnD Spell Viewer</h5>
                <a href = "https://jarrettheller.github.io/DnD-Spells/">
                    <img src={project1Image} height={350} width={500} className="float-left" alt="project 1"/>
                </a>
                <p className="float-left">A project that shows off a list of spells from different classes from the board game, dungeons and dragons.</p>
                <a href="https://github.com/JarrettHeller/DnD-Spells">Github Repo</a>
            </div>
            <div className="col-md-6 mb-3">
            <h5>Vision Board</h5>
                <a href = "https://vision-board-learning-place.herokuapp.com">
                    <img src={project2Image} height={350} width={500} className="float-left" alt="project 3"/>
                </a>
                <p className="float-left">This site allows you to make an account and make different "vision boards" that allow you to keep track of images, links and, notes for any sort of creative project. The project was built using react, express, mySQL, and passport.</p>
                <a href="https://github.com/maggiemaywilder/vision-board">Github Repo</a>
            </div>

        </div>

        <div className="row">
            <div className="col-md-6 mb-3">
                <h5>Budget Tracker Site</h5>
                <a href = "https://pacific-coast-12172.herokuapp.com">
                    <img src={Budget} height={350} width={500} className="float-left" alt="Budget Tracker"/>
                </a>
                <p className="float-left">This site allows you to enter different expenses made and helps keep track of your money and finances. All data is handled using mongoDB.<a href="https://github.com/Lplumb/Online-Offline-budget-tracker">Github Repo</a></p>

            </div>
            <div className="col-md-6 mb-3">
                <h5>Burger Menu</h5>
                <a href = "https://shrouded-forest-04923.herokuapp.com">
                    <img src={Burg} height={350} width={500} className="float-left" alt="project 2"/>
                </a>
                <p className="float-left">An app that just simply keeps track of a burger menu using index handlebars for live updating in the site. <a href="https://github.com/Lplumb/burger">Github Repo</a></p>
                
            </div>

        </div>

        <card>
            <ul>
                <li></li>
            </ul>
        </card>

        </div>
        )
    }
}
