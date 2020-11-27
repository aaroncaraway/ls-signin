import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { LanguageContext } from "./contexts/LanguageContext";
import { ThemeContext } from "./contexts/ThemeContext";

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧",
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷",
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸",
  },
};

const Navbar = (props) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { classes } = props;
  const { language } = useContext(LanguageContext);
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "primary" : "secondary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>

          <Typography className={classes.title} variant="h6" color="inherit">
            International App
          </Typography>
          <Switch onClick={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
