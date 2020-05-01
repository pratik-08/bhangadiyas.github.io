import React, { Component } from 'react';
import './App.css';
import { Contact } from './component/Contact';
import { About } from './component/About';
import { Home } from './component/Home';
import { Family } from './component/Family';
import { NavLink, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/bhangadiyas.github.io/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/bhangadiyas.github.io/component/Family'>Family</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/bhangadiyas.github.io/component/About'>About</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/bhangadiyas.github.io/component/Contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/bhangadiyas.github.io/' component={Home}></Route>
    <Route exact path='/bhangadiyas.github.io/component/Family' component={Family}></Route>
    <Route exact path='/bhangadiyas.github.io/component/About' component={About}></Route>
    <Route exact path='/bhangadiyas.github.io/component/Contact' component={Contact}></Route>
  </Switch>
);

class App extends Component {
  render() {
    return (
      <>
        <div className='app'>
          <h1>Bhangadiya's Family Tree</h1>
          <Navigation />
          <Main />
        </div>
      </>
    );
  }
}
export default App;
