import React, {Component} from 'react';

function StatusButton(props)
{
    let statusText = '';
    switch(props.status % 3)
    {
        case 1:
            statusText = 'Not Started';
            break;
        case 2:
            statusText = 'In Progress';
            break;
        case 0:
            statusText = 'Completed';
            break;
        default:
            statusText = 'Invalid';
    }
    return (<button onClick={props.updateStatus}>{statusText}</button>);
}

class TaskRow extends Component
{
    updateStatus = (task) =>
    {
        this.props.updateStatus(task);
    }

    removeTask = (task) =>
    {
        this.props.removeTask(task);
    }

    render()
    {
        const taskName = this.props.task.name;
        const taskStatus = this.props.task.status;
        return (
            <div>
                {taskName}
                <StatusButton status={taskStatus} updateStatus={() => this.updateStatus(this.props.task)}/>
                <button onClick={() => this.removeTask(this.props.task)}>Delete</button>
            </div>
        );
    }
}

export default TaskRow;
