import React, {Component} from 'react';

class AddNewTask extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            newTask: ''
        }
    }

    addTask = () =>
    {
        this.props.addTask(this.state.newTask);
        this.setState({newTask: ''});
    }

    clearTasks = () =>
    {
        this.props.clearTasks();
    }

    hasChanged = (e) =>
    {
        this.setState({newTask: e.target.value});
    }

    render()
    {
        const clearButton = this.props.tasks.length > 0 && <button onClick={this.clearTasks}>Clear</button>;
        const addButton = this.state.newTask !== '' && <button onClick={this.addTask}>Add</button>;
        return (
            <div>
                <input className={"new-task"} placeholder="Enter task here..." value={this.state.newTask} onChange={this.hasChanged}/>
                {addButton}
                {clearButton}
            </div>
        );
    }
}

export default AddNewTask;
