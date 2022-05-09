import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";


const TodoList = ({todos, deleteTodo}) => {

    if (!todos.length){
        return(
        <Badge colorScheme="green" p={4} borderRadius="lg" >No Todos, yay!!!</Badge>
        )
    };

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