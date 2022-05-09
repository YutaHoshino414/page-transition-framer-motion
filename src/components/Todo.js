import { Heading, VStack,IconButton } from "@chakra-ui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {FaSun,FaMoon} from 'react-icons/fa';
import { motion } from "framer-motion";
import {ChakraProvider} from '@chakra-ui/react';

const Todo = () => {

    return ( 
        <ChakraProvider>
        <motion.div className="bg"
            initial={{scaleY:1}}
            animate={{scaleY:0}}
            exit={{scaleY:1}}
            transition={{duration:0.6}}
        >
        </motion.div>
        <VStack p={4}>
            <IconButton icon={<FaSun />} isRound='true' size="lg" alignSelf="flex-end" />
            <Heading 
                p={6} fontWeight="extrabold" size="2xl"
                bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
                bgClip='text'
            >
                Todo Application
            </Heading>
            <TodoList />
            <AddTodo />
        </VStack>
        </ChakraProvider>
    );
}

export default Todo;