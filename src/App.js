import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/About' exact>
            <About />
          </Route>
          <Route path='/Work' exact>
            <Work />
          </Route>
          <Route path='/Contact' exact>
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
