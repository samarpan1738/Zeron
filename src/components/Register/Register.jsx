import React, {useEffect, useState} from 'react'
import {Stack,FormControl,FormLabel,Input, FormHelperText,ThemeProvider, Button, Avatar} from "@chakra-ui/core"
import useFetch from '../../Hooks/useFetch'
import Post from '../Methods/Post'
import "./register.css"

export default function Register(props) {
    console.log(props)
    const [form, setForm] = useState({name: "", email: ""})
    
   const handleOnChange = (e) => {
       console.log("dsgd");
       console.log(e.target.name, e.target.value)
       setForm(prev => ({...prev, [e.target.name]: e.target.value}))
   }
    
    return (
        <ThemeProvider >
        <Stack className="form">
            <h1 className="reg-heading">Register</h1>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <FormControl isRequired className="register-field">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input type="text" id="name" onChange={handleOnChange} value={form.name} name="name"/>
            </FormControl>
            <FormControl isRequired className="register-field">
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input  name="email" type="email" id="email" aria-describedby="email-helper-text" onChange={handleOnChange} value={form.email}/>
            </FormControl>
           
            <Post url="/api/user/register">
                {(setState, callback) => 
                <>
                <div>{JSON.stringify(callback)}</div>
                <Button variantColor="teal" size="md" className="register-btn" onClick={() => setState(form)}>Register</Button>
                </>
                }
            </Post>
        </Stack>
        </ThemeProvider>
    )
}
