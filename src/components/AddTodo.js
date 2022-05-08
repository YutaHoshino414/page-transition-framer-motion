import { Button, HStack, Input } from "@chakra-ui/react";

const AddTodo = () => {
    const handleSubmit = (e) =>{
    };

    return ( 
        <form>
            <HStack mt={8}>
                <Input placeholder="learning chakra with todo app"/>
                <Button colorScheme="pink" px={8} type="submit">
                    Add
                </Button>
            </HStack>
        </form>
     );
}

export default AddTodo;