



import { useState } from 'react';
import React from 'react';

type Todo = {
    id: number;
    task: string;
    completed: boolean;
};

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [editingId, setEditingId] = useState<number | null>(null); // Track which todo is being edited
    const [editingTask, setEditingTask] = useState<string>(''); // Task content for the current editing todo

    // Function to add a new todo
    const addTodo = (): void => {
        if (newTask.trim() !== '') {
            const newTodo: Todo = {
                id: Date.now(),
                task: newTask,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setNewTask('');
        }
    };

    // Function to toggle the completed state of a todo
    const toggleTodo = (id: number): void => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Function to delete a todo
    const deleteTodo = (id: number): void => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    // Function to enable edit mode
    const editTodo = (id: number, task: string): void => {
        setEditingId(id);
        setEditingTask(task);
    };

    // Function to update a todo item after editing
    const updateTodo = (): void => {
        if (editingId !== null && editingTask.trim() !== '') {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === editingId ? { ...todo, task: editingTask } : todo
                )
            );
            setEditingId(null); // Exit edit mode
            setEditingTask('');
        }
    };

    // Function to cancel editing mode
    const cancelEdit = (): void => {
        setEditingId(null);
        setEditingTask('');
    };

    return (
        <div className="todo-list">
            <h2 className="title">Your Task List</h2>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex align-items-center">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="form-check-input me-2"
                            aria-label={`Mark ${todo.task} as completed or incomplete`}
                        />
                        
                        {editingId === todo.id ? (
                            // Edit Mode: Show input field for editing the task
                            <>
                                <input
                                    type="text"
                                    value={editingTask}
                                    onChange={(e) => setEditingTask(e.target.value)}
                                    className="form-control me-2"
                                />
                                <button
                                    onClick={updateTodo}
                                    className="btn btn-success me-2"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={cancelEdit}
                                    className="btn btn-warning"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            // Normal Mode: Show the task text and edit button
                            <>
                                <span
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none',
                                    }}
                                    className="flex-grow-1"
                                >
                                    {todo.task}
                                </span>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => editTodo(todo.id, todo.task)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.id)}
                                    aria-label={`Delete ${todo.task}`}
                                >
                                    Trash
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            <div className="input-group">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="form-control me-2"
                    placeholder="Add new task"
                />
                <button
                    onClick={addTodo}
                    className="btn btn-primary"
                    disabled={newTask.trim() === ''}
                >
                    Add Todo/Edit Todo
                </button>
            </div>
        </div>
    );
};

export default TodoList;
