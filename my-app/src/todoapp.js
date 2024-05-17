import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleAddTask = () => {
        const newTask = { title: taskName, description: description };
        setTasks([...tasks, newTask]);
        setTaskName('');
        setDescription('');
        setShowForm(false);
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="task-manager">
            <div className="nav-bar">
                <h1>Inbox</h1>
                <div className='wrap-add-task'><FaPlusCircle onClick={() => setShowForm(!showForm)} />
                    Add task
                </div>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            name="taskRadio"
                            onClick={() => handleRemoveTask(index)}
                        />
                        {task.title}
                    </div>
                ))}
                {showForm && (
                    <div className="add-task-form">
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            placeholder="Task name"
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                        />
                        <button onClick={handleAddTask}>Add task</button>
                        <button onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskManager;
