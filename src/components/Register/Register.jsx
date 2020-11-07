import React, {useEffect, useState} from 'react'
import {Stack,FormControl,FormLabel,Input, FormHelperText,ThemeProvider, Button, Avatar} from "@chakra-ui/core"
import useFetch from '../../Hooks/useFetch'
import Post from '../Methods/Post'
import "./register.css"

export default function Register(props) {
    
    const [form, setForm] = useState({name: "", email: "", picture: ""})

    useEffect(() => {
        console.log(props.data)
        setForm({
            ...props.data.data
        })
    }, [props.data])
    
   const handleOnChange = (e) => {
       console.log(e.target.name, e.target.value)
       setForm(prev => ({...prev, [e.target.name]: e.target.value}))
   }
    
    return (
        <ThemeProvider >
        <Stack className="form">
            <h1 className="reg-heading">Register</h1>
            <Avatar name={form.name ? form.name : ''} src={form.picture ? form.picture : ''} id="user-avatar-img" />
            <FormControl isRequired className="register-field">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input type="text" id="name" onChange={handleOnChange} value={form.name ? form.name : ''} name="name"/>
            </FormControl>
            <FormControl isRequired className="register-field">
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input  name="email" type="email" id="email" isDisabled={true} _disabled={{color: "#8f8f8f", cursor: "not-allowed"}} aria-describedby="email-helper-text" onChange={handleOnChange} value={form.email ? form.email : ''}/>
            </FormControl>
           
            <Post url="/api/user/register">
                {(setState, callback) => 
                <>
                <div>{callback && callback.err ? callback.err : ""}</div>
                <Button variantColor="teal" size="md" className="register-btn" onClick={() => setState(form)}>Register</Button>
                </>
                }
            </Post>
        </Stack>
        </ThemeProvider>
    )
}
