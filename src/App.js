import React, { Component } from 'react';
import './App.css';
import Shayon from './component/Shayon';
import AddPlayer from './component/AddPlayer';
import 'semantic-ui-css/semantic.min.css';
import './Player.css';

class App extends Component {


  // THIS IS THE MAIN STATE OF THE COMPONENT
  state = {
    players: [
      { name: "Messi", age: 34, born: 1987, id: 1 },
      { name: "Ronaldo", age: 35, born: 1986, id: 2 },
      { name: "Neymar", age: 27, born: 1992, id: 3 }
    ]
  };



  // THIS WIIL STORE A NEW PLAYER FROM THE FORM USER SUBMITTED
  addPlayer = (player) => {
    console.log(player);
    player.id = Math.random();

    // THIS WILL TAKE CURRENT STATE AND ADD A NEW ARRAY TO IT
    let players = [...this.state.players, player];

    // THIS WILL STORE PLAYER INTO THE STATE
    this.setState({
      players: players
    })
  }



  //THIS WILL DELETE THE PLAYER
  deletePlayer = (id) => {
    console.log(id);
    let players = this.state.players.filter(player => {
      return player.id !== id  ;
    });
    this.setState({
      players : players
    })
  }

  // WHEN THE COMPONENT FIRST MOUNT TO THE DOM
  // AND COMPONENT ONLYMOUNTED ONCE
  componentDidMount(){
    // NOW WE CAN SEE THIS LOG IN ABOVE ALL OUTPUT
    console.log('Component Mounted');
  }


  // THIS RUNS WHEN WE CHAGE AND UPDATE PROPS AND STATE
  componentDidUpdate(prevProps, prevState){
    console.log('Component Updated');
    // WHEN WE WILL UPDATE OF DELETE FROM BROWSER IT WILL LOG
    console.log("Previous Porps", prevProps );
    console.log("Previous State", prevState)
  }


  // RENDERING ALL COMPONENT HARE
  render() {
    return (
      <div className="App">
        <Shayon deletePlayer={this.deletePlayer} players={this.state.players} />
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    );
  }
}

export default App;
