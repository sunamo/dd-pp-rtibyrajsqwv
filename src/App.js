import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'

class App extends Component {
  render() {
    const appStyle = { height: "95vh", marginBottom: "0", width: "100vw" }

    return (
      <BrowserRouter>
        <div style={appStyle}>
          <div className="App" style={appStyle}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
