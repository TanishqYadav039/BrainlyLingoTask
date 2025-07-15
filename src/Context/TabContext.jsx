import { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const useTab = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
  const [tab, setTab] = useState("wordexplore")

  const handleTab = (currentTab) =>{
    setTab(currentTab)
  }

  return (
    <TabContext.Provider value={{tab, setTab, handleTab}}>
      {children}
    </TabContext.Provider>
  );
};
