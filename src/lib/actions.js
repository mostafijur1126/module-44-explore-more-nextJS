'use server'
import { revalidatePath } from "next/cache";
import { postTask } from "./Tasks";
import { redirect } from "next/navigation";

export const createTask = async(formData) => {
    'use server'
    const NewTask = Object.fromEntries(formData.entries());
    // console.log(NewTask);
    const res = await postTask(NewTask);
    if(res.ok ){
        revalidatePath('/tasks')
    }
    return res;
}

export const addNewTasks = async(formData) =>{
    
    const NewTask = Object.fromEntries(formData.entries());
    // console.log(NewTask);
    const res = await postTask(NewTask);
    if(res.ok ){
        revalidatePath('/tasks');
        redirect('/tasks')
    }
    return res;
}