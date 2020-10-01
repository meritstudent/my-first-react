import React from 'react'
import { Heading, List, ListItem } from "@chakra-ui/core"
import { AddTaskModal } from '../components/Tasks'


const ToDo = (props) => (
  <>
    <Heading as="h1" size="lg">To Do</Heading>
    <AddTaskModal handleCreate={props.handleCreate} />
    <List mt={2} minW={400} spacing={1}>
      {props.todo.map(val => <ListItem>{val}</ListItem>)}
    </List>
  </>
)

export default ToDo