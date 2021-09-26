import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import './index.css';


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Work'>
            <Work />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
