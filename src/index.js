import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ColorModeScript} from '@chakra-ui/react';
import theme from './components/theme';
import {ChakraProvider} from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
