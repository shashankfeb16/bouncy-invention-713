import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

const Players = () => {
  return (
    <Box   h="600px"bg={"white"} w='75%' margin ="auto" border={"2px solid red"}>
    This is the Bo
     <Box w="95%" border={"1px solid black"} margin="auto" >
       <Flex h={"400px"} justifyContent="space-around">
          <Box w={"33%"} border="1px solid blue" margin={"auto"} >     
              
          </Box>
          <Box w={"66%"} border="1px solid blue" margin={"auto"}>
              <Flex w={"100%"} h="50%" flexFlow={"row"}>
              <Box w={"50%"}  border="1px solid blue"></Box>  
              <Box w="25%" border="1px solid blue"></Box>
              <Box w="25%" border="1px solid blue"></Box>  
              </Flex>   
          <Flex w={"100%"} h="50%">
              <Box w="25%" border="1px solid blue"></Box>
              <Box w="25%" border="1px solid blue"></Box>
              <Box w="25%" border="1px solid blue"></Box>
              <Box w="25%" border="1px solid blue"></Box>    
          </Flex>    
          </Box>     
        
        </Flex>  
    

     </Box>
  </Box>
  )
}

export default Players