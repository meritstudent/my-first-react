import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  List,
  ListItem,
  Flex
} from "@chakra-ui/core";

const AddTaskModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formSubmit = e => {
    e.preventDefault()
    props.handleCreate(document.getElementById("task").value)
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Add Task</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formSubmit}>
            <ModalBody>
              <FormControl>
                <FormLabel htmlFor="task">New Task</FormLabel>
                <Input type="task" id="task" aria-describedby="add a task" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button variantColor="blue" ml={3} type="submit">
              Add
            </Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

const TasksList = props => (<List spacing={1} minW={400} mt={2}>
  {props.todo.map((val, i) => 
    <ListItem p={2} border='1px' borderRadius='md' borderColor='gray.200'>
      <Flex justify="space-between" align="center">
        <span>{val}</span>
        <span>
          {"handleArchive" in props ? 
          <IconButton 
            mr={2}
            variantColor="green" 
            icon="check" 
            onClick={() => props.handleArchive(val, i)}
          /> : null }
          <IconButton 
            variantColor="red" 
            icon="delete" 
            onClick={() => props.handleDelete(i)}
          />
        </span>
      </Flex>
    </ListItem>)}
  </List>
)

export { AddTaskModal, TasksList }