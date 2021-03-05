import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, taskDelete, onToggle }) => {
    const iconStyles = {color: 'red', cursor: 'pointer'}
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={() => taskDelete(task.id)} style={iconStyles} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
