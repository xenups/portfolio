import React, { Component } from 'react'
import 'react-persian-calendar-date-picker/lib/DatePicker.css';
import DatePicker from 'react-persian-calendar-date-picker';
// import { Button, Alert, Spinner } from 'elemental' 


export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <DatePicker />

        </section>
      </div>
    )
  }
}