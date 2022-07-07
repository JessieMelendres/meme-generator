import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "gray",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.isCompleted}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.isCompleted ? completedStyle : null}>{props.item.task}</p>
        </div>
    )
}



export default TodoItem