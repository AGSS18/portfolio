import { Link } from 'react-router-dom';
import classes from './Hero.module.css';

function Hero() {
    return(
    <div className={classes.hero} >
        <div className={classes["hero-content"]}>
            <div className={classes["hero-text"]} >
                <h2 className={classes.greeting} >Hello,</h2>
                <h2 className={classes.coder} > 
                    <span className={classes["coder-pronoun"]} >I'm </span> 
                    Ana Sala
                </h2>
                <h1 className={classes.frontend}>Front-end developer</h1>
            </div>
            <div className={classes.button}>
                <Link to="/Contact">Contact me</Link>
            </div>
        </div>
    </div>
    );
}

export default Hero;