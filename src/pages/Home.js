import LatestProjects from "../components/home-components/LatestProjects";
import classes from './Home.module.css';
import projectsData from '../projectsData';
import servicesData from "../servicesData";
import Services from "../components/home-components/Services";

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
            <h2 className={classes["services-title"]}>Services</h2>
            <div className={classes["home-services"]}>
                {servicesData.map(service => {
                    return(
                        <Services 
                        key={service.id} 
                        icon={service.icon} 
                        title={service.title} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;