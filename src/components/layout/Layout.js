import { useState } from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";

function Layout(props) {
    const [heroText, setHeroText] = useState(1);

    function updateHome(event) {
        event.preventDefault();
        setHeroText(1);
    } 

    function updateAbout(event) {
        event.preventDefault();
        setHeroText(2);
    } 

    function updateWork(event) {
        event.preventDefault();
        setHeroText(3);
    } 

    function updateContact(event) {
        event.preventDefault();
        setHeroText(4);
    } 

    return(
        <div>
            <Navigation 
                updateHome={updateHome} 
                updateAbout={updateAbout} 
                updateWork={updateWork} 
                updateContact={updateContact} 
            />
            <Hero heroText={heroText} />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;