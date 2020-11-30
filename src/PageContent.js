import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const PageContent = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? 'lightgrey' : 'white',
    height: '100vh',
    width: '100vw',
    margin: '0px',
    padding: '0px',
  };
  return <div style={styles}>{props.children}</div>;
};

export default PageContent;
