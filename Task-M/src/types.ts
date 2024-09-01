// types.ts
export interface Task {
    id?: number;  // Optional for new tasks
    title: string;
    description: string;
    dueDate: string;
    priority: 'low' | 'medium' | 'high';
}

export interface TaskFormErrors {
    title?: string;
    description?: string;
    dueDate?: string;
    priority?: string;
}
