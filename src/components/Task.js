import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, {Component} from "react";

class Task extends Component{


    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'red' : 'black' , //Condicional si esta en falso color negro, sino colo rojo
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        const { task } = this.props;

        return <p style={this.StyleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            <input type="checkbox" />
            <button style = { btnDelete }>
                x
            </button>       
        </p>


    }
}

const btnDelete = {
    fontSize: '24px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;