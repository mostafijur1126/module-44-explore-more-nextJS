import TaskCard from '@/components/taskCard/TaskCard';
import { getTasks } from '@/lib/Tasks';
import React from 'react';

const TasksPage = async() => {
    const tasks = await getTasks();
    console.log(tasks);
    return (
        <div>
            <h1>Task:{tasks.length}</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;