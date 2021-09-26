import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import classes from './Hero.module.css';

function Hero(props) {

    const [condition, setCondition] = useState(props.heroText);

    function toContact(event) {
        event.preventDefault();
        setCondition(4);
    }
    
    useEffect(() => {
        setCondition(props.heroText);
    }, [props.heroText]);

    return(
    <div className={classes.hero} >
        <div className={classes["hero-content"]}>
            {condition === 1 ? 
                    <div className={classes["hero-text"]} >
                        <h2 className={classes.greeting} >Hello,</h2>
                        <h2 className={classes.coder} > 
                            <span className={classes["coder-pronoun"]} >I'm </span> 
                            Ana Sala
                        </h2>
                        <h1 className={classes.frontend}>Front-end developer</h1>
                    </div>

            :
            condition === 2 ? 
                <h2 className={classes.about}>About Me</h2>
            :
            condition === 3 ?
                <h2 className={classes.work}>My Work</h2>  
            :
                <h2 className={classes.contact}>Contact Me</h2>  
            }

            {condition !== 4 && 
                <div className={classes.button}>
                    <Link onClick={toContact} to="/Contact">Contact me</Link>
                </div>
            }

        </div>
    </div>
    );
}

export default Hero;