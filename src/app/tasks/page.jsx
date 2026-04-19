import AddTask from '@/components/AddTask/AddTask';
import TaskCard from '@/components/taskCard/TaskCard';
import { getTasks } from '@/lib/Tasks';
import React from 'react';

const TasksPage = async() => {
    const tasks = await getTasks();
    // console.log(tasks);
    return (
        <div>
            <h1 className='mb-5'>Task:{tasks.length}</h1>
            <AddTask></AddTask>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;