import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';
import { ThemeContext } from './contexts/ThemeContext';

const Navbar = (props) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? 'primary' : 'secondary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>LS</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            Lettuce Shop
          </Typography>
          <Switch onClick={toggleTheme} />
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
