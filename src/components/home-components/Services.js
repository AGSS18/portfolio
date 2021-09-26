import classes from './Services.module.css';

function Services(props) {
    return(
        <div className={classes.services}>
            <span className={classes.icon}>{props.icon}</span>
            <p className={classes.title}>{props.title}</p>
        </div>
    );
}

export default Services;