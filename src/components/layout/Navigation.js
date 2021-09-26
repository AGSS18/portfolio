import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation(props) {
    return(
        <header className={classes.header} >
            <nav>
                <ul>
                    <li onClick={props.updateHome} >
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={props.updateAbout} >
                        <Link to='/About'>About</Link>
                    </li>
                    <li onClick={props.updateWork} >
                        <Link to='/Work'>Work</Link>
                    </li>
                    <li onClick={props.updateContact} >
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;