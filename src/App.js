import React from "react";
import "./App.css";
import Form from "./Form";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
