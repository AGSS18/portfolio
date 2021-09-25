import LatestProjects from "../components/home-components/LatestProjects";
import classes from './Home.module.css';
import projectsData from '../projectsData';

function Home() {
    return(
        <div className="container margin-top-medium margin-bottom-medium" >
            <h2 className={classes["latest-title"]}>My Latest Projets</h2>
            <div className={classes["latest-projects"]}>
                {projectsData.map((projectData, index) => {
                    if(index < 3) {
                        return (
                            <LatestProjects 
                            key={projectData.id} 
                            title={projectData.title} 
                            description={projectData.descriptcion}
                            built={projectData.built} 
                            image={projectData.image}
                            url={projectData.url}
                            />
                        );
                    } else{ return  null}
                })}
            </div>
        </div>
    );
}

export default Home;