
import { useState } from 'react'
import React from 'react'

type Todo = {
    id: number;
    task: string;
    completed: boolean
}

const TodoList: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([])
    const [newTask, setNewTask] = useState<string>('')

    const addTodo = (): void => {
        if (newTask.trim() !== '') {
            const newTodo: Todo = {
                id: Date.now(),
                task: newTask,
                completed: false
            };
            setTodos([...todos, newTodo])
            setNewTask('')
        }
    }

    const toggleTodo = (id: number): void => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed}: todo
            
            ) 
        
        )
    }

    const deleteTodo = (id: number): void => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }
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
                        />
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',

                            }}
                            className="flex-grow-1"
                        >
                            {todo.task}
                        </span>
                        <button className="btn float-right" onClick={() => deleteTodo(todo.id)}>Trash</button>
                    </li>
                ))}
            </ul>
            <div className="input-group">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="form-control me-2"
                />
                <button onClick={addTodo} className="btn btn-primary">Add Todo</button>
            </div>
        </div>
    );
};

export default TodoList;