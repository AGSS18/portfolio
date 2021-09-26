import classes from './ContactIcons.module.css';

function ContactIcons(props) {
    return(
        <a className={classes.icon} href={props.link} target="_blank" title={props.title} rel="noreferrer">
            <span className={classes["icon-text"]} >{props.icon}</span>
        </a>
    );
}

export default ContactIcons;