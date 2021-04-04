import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import MeContainer from './components/MeContainer/MeContainer';
import SayHelloContainer from './components/Contact/SayHelloContainer';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Github from './components/Github/Github';
import BlogPage from './components/Blog/BlogPage';
import MePage from './components/MePage/MePage';
import Footer from './components/Footer/Footer';


function App() {
  return (
  <>
  <Header />
<Router>
      <div>
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
          <Route path="/me-page">
            <MePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
    </>
  );
}

export default App;
