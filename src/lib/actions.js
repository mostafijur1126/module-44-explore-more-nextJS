
export const createTask = async(formData) => {
    'use server'
    const name = formData.get('name')
    const content = formData.get('content')
}