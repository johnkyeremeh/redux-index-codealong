import React, { Component } from 'react'
import {connect} from 'react-redux'
import Todo from './Todo';

class ToDosContainer extends Component{

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render (){
        console.log(this.props.todos)
        return (
            <ol>{this.renderTodos()}</ol>
        );
    };
}

const MapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(MapStateToProps)(ToDosContainer)