"use client";
import React, { useState } from 'react';
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, InputGroup, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth.client';

const singInPage = () => {
     const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData (e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        // console.log(userData);
        const {data, error} = await authClient.signIn.email({
            email: userData.email,
            password:userData.password,
            rememberMe:true,
            callbackURL:"/"
        })
    }
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Form className="flex w-96 flex-col gap-4 border p-5 rounded-2xl shadow-2xl" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                 <TextField className="w-full max-w-[280px]" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full max-w-[280px]"
          type={isVisible ? "text" : "password"}
          name='password'
          placeholder='inter your password'
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default singInPage;