import React from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";

class ToDo extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            tasks: [{ name: "Play Chess with Horatio.", status: 2 },
                { name: "Read at least one chapter from the book Dune.", status: 1 }]
        };
    }

    addTask = (taskName) =>
    {
        const previousTasks = this.state.tasks;
        this.setState({tasks: previousTasks.concat([{name: taskName, status: 1}])});
    }

    clearTasks = () =>
    {
        this.setState({tasks: []});
    }

    removeTask = (task) =>
    {
        const result = this.state.tasks.filter((taskToRemove) => taskToRemove.name !== task.name);
        this.setState( {tasks: result});
    }

    updateStatus = (task) =>
    {
        task.status = task.status + 1;
        const result = this.state.tasks.map(taskToUpdate => (taskToUpdate.name === task.name) ? task : taskToUpdate);
        this.setState({tasks: result});
    }

    render()
    {
        return (
            <div>
                <AddNewTask tasks={this.state.tasks} addTask={(taskName) => this.addTask(taskName)} clearTasks={this.clearTasks}/>
                <TaskList tasks={this.state.tasks} removeTask={(task) => this.removeTask(task)} updateStatus={(task) => this.updateStatus(task)}/>
            </div>
        );
    }
}

export default ToDo;
