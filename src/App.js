import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Quicksight Embedding Demo
            </Typography>
            <Button color='inherit' className={classes.button}>Test1</Button>
            <Button color='inherit' className={classes.button}>Test2</Button>
            <Button color='inherit' className={classes.button}>Test3</Button>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}

export default App;
