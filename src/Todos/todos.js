import React, { Component } from 'react';


export const Newlist = (props) => {
    return (
        <div>
            <h1>{props.tdName}</h1>
            <p>{props.tdPriority}</p>
        </div>
    );
}
class Todop extends Component {
    render() {
        return (
            <div className="App">
                This is Todo list todo.js
            </div>
        );
    }
}

export default Todo;

