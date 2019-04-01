import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contract from './components/Contract';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* exact means this will not effect on any other routes */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contract' component={Contract} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

