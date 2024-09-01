import React, { useState } from 'react';
import { Task, TaskFormErrors } from '../types';

interface TaskFormProps {
    onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [task, setTask] = useState<Task>({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
    });
    const [errors, setErrors] = useState<TaskFormErrors>({});

    const validate = (): boolean => {
        const newErrors: TaskFormErrors = {};

        if (!task.title) newErrors.title = 'Title is required';
        if (!task.dueDate) newErrors.dueDate = 'Due date is required';
        if (!task.priority) newErrors.priority = 'Priority is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(task);
            setTask({ title: '', description: '', dueDate: '', priority: 'medium' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                />
                {errors.title && <span className="error">{errors.title}</span>}
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="dueDate">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleChange}
                />
                {errors.dueDate && <span className="error">{errors.dueDate}</span>}
            </div>

            <div>
                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                {errors.priority && <span className="error">{errors.priority}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;
