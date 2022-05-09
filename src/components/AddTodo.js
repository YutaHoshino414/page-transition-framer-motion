import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({addTodo}) => {
    const [content, setContent] = useState('');
    
    const toast = useToast({
        title: 'No Content.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top',
        variant: 'subtle',
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!content){
            toast()
            return;
        };
        const todo = {
            id: nanoid(), body: content,
        };
        addTodo(todo);
        setContent("")     /* input空へ */
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <HStack mt={8}>
                <Input 
                    placeholder="learning chakra with todo app"
                    value={content} variant="filled" w={300} color='#2C5282' fontWeight="bold"
                    onChange={(e)=>setContent(e.target.value)}
                />
                <Button colorScheme="pink" px={8} type="submit">
                    Add
                </Button>
            </HStack>
        </form>
     );
}

export default AddTodo;