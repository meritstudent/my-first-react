import React from 'react'
import { Link } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/core'; 

const Nav = () => {
  return (<>
    <Flex 
      as="header" 
      direction="row" 
      justify="space-between"
      align="center"
      bg="brand.900"
      color="white"
      p={3}
    >
      <nav>
        <Box as="span" p={2}><Link to="/">ToDo</Link></Box>
        <Box as="span" p={2}><Link to="/archive">Archive</Link></Box>
      </nav>
      <span>My ToDo App</span>
    </Flex>
  </>)
}

export default Nav