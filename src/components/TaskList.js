import React, {Component} from 'react';
import TaskRow from "./TaskRow";

class TaskList extends Component
{
    removeTask = (task) =>
    {
        this.props.removeTask(task);
    }

    updateStatus = (task) =>
    {
        this.props.updateStatus(task);
    }

    render()
    {
        const todoItems = this.props.tasks.map((task) =>
            // Add epoch time suffix
            <li key={task.name}>
                <TaskRow task={task} removeTask={() => this.removeTask(task)} updateStatus={() => this.updateStatus(task)}/>
            </li>
        );

        return (
            <div>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
}

export default TaskList;
