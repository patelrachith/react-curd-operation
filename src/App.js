import React from 'react';
import './style.css';
import Test from './Components/Test';
import Header from './Components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

export default function App() {
  return (
    <div>
      <h1>React Application</h1>
      <hr />
      {/* <Header />
      <Home /> */}
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>

      {/* <Test /> */}
    </div>
  );
}
