import React from 'react';
import Main from './pages/_main';
import { ThemeProvider } from './providers/ThemeProvider';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
