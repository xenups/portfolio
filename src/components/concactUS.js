import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">    
          <div className="row">
            {/* <aside className="eigth columns footer-widgets"> */}
              <div >
                <h4>You can contact me</h4>
                <div className="item-wrap"><p><span>{resumeData.phoneNumber}</span></p></div> 
                <div className="item-wrap"><p><span>{resumeData.address}</span></p></div> 
              </div>
            {/* </aside> */}
          </div>
        </section>
        );
  }
}