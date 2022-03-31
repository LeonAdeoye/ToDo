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
            <TaskRow task={task} removeTask={() => this.removeTask(task)} updateStatus={() => this.updateStatus(task)}/>
        );

        return (
            <div>
                    {todoItems}
            </div>
        );
    }
}

export default TaskList;
