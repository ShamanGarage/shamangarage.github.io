import { Route, Switch} from "react-router-dom";

import './content.css'

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Radio from './pages/radio/Radio';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Game from './pages/game/Game';

function Content(){
  return(
    <div className="content">
    <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/proyectos">
              <Projects />
            </Route>
            <Route path="/radio">
              <Radio />
            </Route>
            <Route path="/blog-info">
              <Blog />
            </Route>
            <Route path="/contacto">
              <Contact />
            </Route>
            <Route path="/¿">
              <Game />
            </Route>
        </Switch>
    </div>
    </div>


  );
}



export default Content;
