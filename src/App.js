import React from 'react';
import './App.css';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account';
import Prices from './components/Prices';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/prices">
                <Prices />
              </Route>
            </Switch>
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
