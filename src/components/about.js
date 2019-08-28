
import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">
                 {/* <div className="row">

                  <div className="columns contact-details">
                  <p>
               
               </p>

                  </div>
               </div> */}
               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
                  <div className="row">
                    <h2>About Me</h2>
                    <span>
                    {
                    resumeData.aboutme
                    }
                    <br></br>
                    <br></br>
                    </span>
                    </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}