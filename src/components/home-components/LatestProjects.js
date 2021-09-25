import classes from './LatestProjects.module.css';

function LatestProjects(props) {
    return(
        <div className={classes.card} >
            <a href={props.url} target="_blank" rel="noreferrer">
                <img src={props.image} alt={props.title} />
            </a>
            <h3>{props.title}</h3>
            <p className={classes.description} >{props.description}</p>
            <p className={classes.built} >{props.built}</p>
        </div>
    );
}

export default LatestProjects;