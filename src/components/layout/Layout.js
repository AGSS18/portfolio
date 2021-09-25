import Hero from "./Hero";
import Navigation from "./Navigation";

function Layout(props) {
    return(
        <div>
            <Navigation />
            <Hero />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;