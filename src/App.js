import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import MeContainer from './components/MeContainer';
import SayHelloContainer from './components/SayHelloContainer';
import Home from './components/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';
import BlogPage from './components/Blog/BlogPage';


function App() {
  return (
  <>
  <Header />
<Router>
      <div>
{   /*     <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/me">Me</Link>
            </li>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
          </ul>
</nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/me">
            <MeContainer />
          </Route>
          <Route path="/hello">
            <SayHelloContainer />
          </Route>
          <Route path='/blog/:id' render={(props) => {
                    return ( <BlogPage {...props } /> )
                }} />
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/github">
            <Github />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;

//https://tobiasahlin.com/


//En header med mitt namn och en rörlig bild X

// en grid med en "header med texter ME"

// I griden har jag sektioner med länk till gidhub (https://github.com/LindBost), info om archery, nån blog med contentful.

// längst ner en contact info say hi 