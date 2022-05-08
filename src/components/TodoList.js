import { HStack, VStack, Text, IconButton, StackDivider, Spacer } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const TodoList = () => {
    const initialTodos = [
        {id:1, body: 'get bred'},
        {id:2, body: 'get butter'}
    ]
    const [todos, setTodos] = useState(initialTodos)
    const deleteTodo = (id)=>{
        const newTodos = todos.filter(todo=>{
            return todo.id !== id
        })
        setTodos(newTodos)
    }
    return ( 
        <VStack divider={<StackDivider/>} 
            bodercolor="gray.100" borderWidth="2px" p={4}
            borderRadius="10px" w="100%"
            maxW={{base:'80vw', sm:'60vw', lg:'50vw', xl:'40vw' }}
            align='stretch'
        >
            {todos.map((todo)=>(
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text><Spacer />
                    <IconButton icon={<FaTrash/>} isRound="true"
                        onClick={()=>deleteTodo(todo.id)}
                    />
                </HStack>
            ))}
        </VStack>
    );
}

export default TodoList;