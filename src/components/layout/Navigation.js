import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
    return(
        <header className={classes.header} >
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Work'>Work</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;