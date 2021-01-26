import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import data from './FakeData.json';
import Home from './screens/Home'
import About from './screens/About'
import Post from './screens/Post'
import Posts from './screens/Posts'
import NoMatch from './screens/NoMatch'

function App() {
  return (
    <div className="App">
      <div className="link">
        <nav>
          <NavLink
          exact
          to={"/"}
          >
            🏡Home
          </NavLink>
          <NavLink to={"/about"}>ℹ About</NavLink>
          <NavLink to={"/posts"}>📝Posts</NavLink>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path={"/"}>
          <Home />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/posts"}>
            <Posts posts={data} />
          </Route>
          <Route path="/posts/:post_id">
            <Post />
          </Route>
          <Route path={"*"} component={NoMatch}/>

        </Switch>
      </main>
    </div>
  );
}

export default App;
