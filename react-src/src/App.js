import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
var QuickSightEmbedding = require('amazon-quicksight-embedding-sdk');

const styles = theme => ({
  title: {
    flexGrow: 1
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
});

class App extends React.Component {

  state = {
    isLoading: false,
    embedUrl: undefined,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://22981a99d3.execute-api.us-east-1.amazonaws.com/Prod/quicksight-dashboard-embed-url')
      .then(response => response.json())
      .then(data => {
        this.setState({ isLoading: false, embedUrl: data });
      })
  }

  render(){
    const { classes } = this.props;

    var options = {};

    if(this.state.embedUrl){
      options = {
        url: this.state.embedUrl,
        container: document.getElementById('dashboardContainer'),
      };

      QuickSightEmbedding.embedDashboard(options);
    }

    return (
      <div className="App">
        <header className="App-header">
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='h6' className={classes.title}>
                Quicksight Embedding Demo
              </Typography>
              {/*<Button color='inherit' className={classes.button}>Test1</Button>
              <Button color='inherit' className={classes.button}>Test2</Button>
              <Button color='inherit' className={classes.button}>Test3</Button>*/}
            </Toolbar>
          </AppBar>
        </header>
        <div id='dashboardContainer'/>
      </div>
    );

  }
}

export default withStyles(styles)(App);
