import React from 'react';
import { List, Button } from 'semantic-ui-react';


// THIS IS FUNCTION COMPONENT 
const Shayon = ({ players, deletePlayer }) => { // WE CAN DISTRUCTURE FROM PARAMETERS SAME AS     const {players} = this.props



    // FIRST WAY TO DISPLAY DATA
    //   console.log(this.props);
    // const { players } = props;
    // const playerList = players.map(player => {
    // if (player.age > 30) {
    //     return (
    //         <List key={player.id}>
    //             <List.Item>
    //                 <List.Header>Name: {player.name}</List.Header>
    //             </List.Item>
    //             <List.Item>
    //                 <List.Header>Age: {player.age}</List.Header>
    //             </List.Item>
    //             <List.Item>
    //                 <List.Header>Born: {player.born}</List.Header>
    //             </List.Item>
    //             <br />
    //         </List>
    //     )
    // }else{
    //     return null;
    // }
    // });





    // SECOND WAY TO DISPLAY DATA
    // const playerList = players.map(player => {
    //     return player.age > 30 ? (
    //         <List key={player.id}>
    //             <List.Item>
    //                 <List.Header>Name: {player.name}</List.Header>
    //             </List.Item>
    //             <List.Item>
    //                 <List.Header>Age: {player.age}</List.Header>
    //             </List.Item>
    //             <List.Item>
    //                 <List.Header>Born: {player.born}</List.Header>
    //             </List.Item>
    //             <br />
    //         </List>
    //     ) : null;
    // });



    // THARD WAY TO DISPLAY DATA
    return (
        <div className="player-list">
            {/* {playerList} */}
            {
                players.map(player => {
                    if(player.age > 30) {
                        return  (
                        <List key={player.id}>
                            <List.Item>
                                <List.Header>Name: {player.name}</List.Header>
                            </List.Item>
                            <List.Item>
                                <List.Header>Age: {player.age}</List.Header>
                            </List.Item>
                            <List.Item>
                                <List.Header>Born: {player.born}</List.Header>
                            </List.Item>
                            <Button color='red' onClick={()=> {deletePlayer(player.id)}}>Delete</Button>
                            <br />
                        </List>
                        )
                    }else{
                        return null;
                    }
                })
            }
        </div>
    )
}


export default Shayon;
