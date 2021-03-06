import { useState, useEffect } from "react";
import { Heading, VStack, IconButton, useColorMode,} from "@chakra-ui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {FaSun,FaMoon} from 'react-icons/fa';
import { motion } from "framer-motion";
import {ChakraProvider} from '@chakra-ui/react';

const Todo = () => {
    const initialTodos = [
        {id:1, body: 'get bred'},
        {id:2, body: 'get butter'}
    ]

    const [todos, setTodos] = useState(
        ()=> JSON.parse(localStorage.getItem('todos')) || []
    );

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const addTodo = (todo)=>{
        setTodos([...todos, todo])
        console.log([...todos, todo])
    };
    const deleteTodo = (id)=>{
        const newTodos = todos.filter(todo=>{
            return todo.id !== id
        })
        setTodos(newTodos)
    }
    const  {colorMode, toggleColorMode} = useColorMode();

    return ( 
        <>
        <motion.div className="bg"
            initial={{scaleY:1}}
            animate={{scaleY:0}}
            exit={{scaleY:1}}
            transition={{duration:0.6}}
        >
        </motion.div>
        <VStack p={4}>
            <IconButton 
                icon={ colorMode ==='light'? <FaSun />:<FaMoon/>} 
                isRound='true' size="lg" alignSelf="flex-end"
                onClick={toggleColorMode}
            />
            <Heading 
                p={6} fontWeight="extrabold" size="2xl"
                bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
                bgClip='text'
            >
                Todo Application
            </Heading>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <AddTodo addTodo={addTodo} />
        </VStack>
        </>
    );
}

export default Todo;