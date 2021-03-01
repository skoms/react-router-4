import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Home from './Home';
import About from './About';
import Header from "./Header";
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <HashRouter basename="/react-router-4">
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About title='About' />} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:fname/:lname?" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </HashRouter>
);

export default App;