import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Hero.module.css';
import ContactIcons from '../contact-components/ContactIcons';
import contactData from '../../contactData';

function Hero(props) {
    return(
    <div className={classes.hero} >
        <div className={classes["hero-content"]}>
            {props.heroText === 1 ? 
                    <div className={classes["hero-text"]} >
                        <h2 className={classes.greeting} >Hello,</h2>
                        <h2 className={classes.coder} > 
                            <span className={classes["coder-pronoun"]} >I'm </span> 
                            Ana Sala
                        </h2>
                        <h1 className={classes.frontend}>Front-end developer</h1>
                    </div>
            :
            props.heroText === 2 ? 
                <h2 className={classes.about}>About Me</h2>
            :
            props.heroText === 3 ?
                <h2 className={classes.work}>My Work</h2>  
            :
                <div>
                    <h2 className={classes.contact}>Contact Me</h2>
                    <div className={classes["contact-icons"]}>
                        {contactData.map(data => (
                            <ContactIcons key={data.id} icon={data.icon} link={data.link} title={data.title} />
                        ))}
                    </div>
                </div>
            }
        </div>
    </div>
    );
}

export default Hero;