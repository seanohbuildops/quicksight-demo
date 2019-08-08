import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position='static'>
          <Toolbar>
            <Button color='inherit'>Test1</Button>
            <Button color='inherit'>Test2</Button>
            <Button color='inherit'>Test3</Button>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}

export default App;
