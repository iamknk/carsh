import Task from './Task'


const Tasks = ({taskList, deleteTask, onToggle}) => {
    const taskDelete = (taskId) => {
        deleteTask(taskId)
    }
    return (
        <>
            {taskList.map((task, index) => <Task key={task.id} task={task} taskDelete={taskDelete} onToggle={onToggle} />)}
        </>
    )
}

export default Tasks
