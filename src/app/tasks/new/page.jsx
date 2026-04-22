'use client';
import React from 'react';
import { Button, Input, Label, TextField, ListBox, Select, Form, FieldError } from "@heroui/react";
import { addNewTasks } from '@/lib/actions';

const NewAddTask = () => {
    return (
        <div className='w-full  '>
            <div className='mx-auto'>
                <h1 className='text-5xl text-center py-10'>Add new task</h1>
                <div className='w-100 mx-auto'>
                    <Form action={addNewTasks} className="flex flex-col gap-4">
                        <TextField isRequired className="w-full" name="title" type="text">
                            <Label>Task Title</Label>
                            <Input placeholder="Add your task title" />
                        </TextField>
                        <TextField
                            minLength={8}
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                            }}
                            className="w-full" name="description" type="text">
                            <Label>Description</Label>
                            <Input placeholder="Add your task description" />
                            <FieldError />
                        </TextField>
                        <Select name="status" className="w-[256px]" placeholder="Select one">
                            <Label>Status</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="completed" textValue="completed">
                                        Completed
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="pending" textValue="pending">
                                        Pending
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="progress" textValue="progress">
                                        Progress
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                        <Select name="priority" className="w-[256px]" placeholder="Select one">
                            <Label>Priority</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="high" textValue="high">
                                        High
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="low" textValue="low">
                                        Low
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="medium" textValue="medium">
                                        Medium
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                        <TextField className="w-full" name="assigned_to">
                            <Label>Assigned to</Label>
                            <Input placeholder="assigned_to" />
                        </TextField>

                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" slot="close">Send Message</Button>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default NewAddTask;