import React, {Component} from 'react';

function StatusButton(props)
{
    let statusText = '';
    let statusClass = '';
    switch(props.status % 3)
    {
        case 1:
            statusText = 'Not Started';
            statusClass = "not-started"
            break;
        case 2:
            statusText = 'In Progress';
            statusClass = "in-progress"
            break;
        case 0:
            statusText = 'Completed';
            statusClass = "completed"
            break;
        default:
            statusText = 'Invalid';
    }
    return (<button className={statusClass} onClick={props.updateStatus}>{statusText}</button>);
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
                <table >
                    <tr>
                        <td className={"name-of-task"}>{taskName}</td>
                        <td className={"status-button"}><StatusButton status={taskStatus} updateStatus={() => this.updateStatus(this.props.task)}/></td>
                        <td className={"delete-button"}><button onClick={() => this.removeTask(this.props.task)}>Delete</button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default TaskRow;
