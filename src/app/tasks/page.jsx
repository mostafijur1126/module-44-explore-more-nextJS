import AddTask from '@/components/AddTask/AddTask';
import TaskCard from '@/components/taskCard/TaskCard';
import { createTask } from '@/lib/actions';
import { getTasks } from '@/lib/Tasks';
import Link from 'next/link';
import React from 'react';

const TasksPage = async() => {
    const tasks = await getTasks();
    // console.log(tasks);
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='mb-5 text-3xl'>Task: {tasks.length}</h1>
            <AddTask createTask={createTask}></AddTask>
            <Link href="/tasks/new"><button>Add New Task</button></Link>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;