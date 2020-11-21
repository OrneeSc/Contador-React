import React from 'react';
import './Section.scss';
import Card from '../Card/Card';

const Section = () => {

    return (
        <div className="card-container">
      
            <Card numero={2}/>
            <Card numero={3}/>
            <Card numero={4}/>
            <Card numero={5}/>
            <Card numero={6}/>
            <Card numero={7}/>
            <Card numero={8}/>
            <Card numero={9}/>
            <Card numero={10}/>
     
        </div>
    )
}

export default Section;