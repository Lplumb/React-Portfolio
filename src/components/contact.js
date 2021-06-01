import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class contact extends Component {
    render() {
        return (
            <div>

        {/* <!--Contains the row that will house the inputs for people to enter thier name and email and messages--> */}
        <main className="container middle-section">
            <h3 className="header text-center">Contact Me</h3>
            {/* <!--contains the form box for names--> */}
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name Here"/>
              </div>
              {/* <!--the form box for emails--> */}
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              {/* <!--contains the form box for the message--> */}
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Enter message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <br/>
          </main>
          <card className="card bg-secondary mb-3">
            <ul>
              <li>Email:<a href = "lplumb1999@gmail.com"> lplumb1999@gmail.com</a></li>
              <li>Phone Number: 913-280-6211</li>
              <li><a href="https://www.linkedin.com/in/lucas-plumb-660083203/">Linkedin</a></li>
            </ul>
          </card>


                
            </div>
        )
    }
}
