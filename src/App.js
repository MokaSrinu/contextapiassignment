import React from 'react';
import Navbar from './components/Navbar';
import Login1 from './components/login';
import Loginstatus from './components/loginstatus';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Login from './components/login';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar/>
        <Login1/>
        <Loginstatus />
      </Box>
    </ChakraProvider>
  );
}

export default App;
