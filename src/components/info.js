import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import picMe from './pics/Photo1.jpg'

export default class Info extends Component {
    render() {
        return (
        <div container bg-dark>
        <h2 className = "label">About Me</h2>


        <br/>
        
            <div className="p-3 mb-2 bg-light text-dark info aboutMe">
        {/* //<!--conatins the image and the paragraph for the about me section--> */}
                <div className="row">
                    <div className="col-md-12">
                        <img src={picMe} alt="pic of me" width={500} className="float-left p-3"/>
                        <p>Welcome to my page! As stated in the top left my name is Lucas. I am a full stack programer who trained at the Ku coding bootcamp, I have knowledge on Javascript, React, Jquery, Node, Express, and Mongo, and I'm personally discovering other languages as well. I really enjoy computers so I wanted to pursue a career in one thus is the reason why I studied programming. Outside of messing with computers I play a lot of video games, I enjoy a bit of everything and get pretty competive in anything with friends. I also listen to a lot of music in my free time and I like to collect vinyl records of all my favorite albums, I'm a big rock fan and old pop music.</p>
                    </div>
                </div>
        
            </div>
        <br/>

        </div>
        )
    }
}
