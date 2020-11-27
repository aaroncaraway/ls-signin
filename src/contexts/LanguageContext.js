import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("spanish");
  const updateLanguage = (e) => setLanguage(e.target.value);
  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
