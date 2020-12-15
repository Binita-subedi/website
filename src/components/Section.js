import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='section-container'>
    <video src='website\public\videos\video-1.mp4' autoplay loop muted />
    <h1> "The journey of a thousand miles begins with a single step" </h1>
    <p> "collect Moment, Not Things" </p>
    <div className='section-btns'>
    <Button className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'>
      Get Started
    </Button>
    <Button
    className='btns'
    buttonStyle='btn--primary'
    buttonsize='btn--large'
    >
      Watch Trailer <i className='far fa-play-circle'/>
    </Button>
    </div>
    </div>
  );
}

export default Section;