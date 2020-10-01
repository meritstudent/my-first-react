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
  Input
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

export { AddTaskModal }