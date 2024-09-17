import { createContext, useContext, useState, useMemo } from 'react';

const MainContext = createContext(null);

const MainProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const value = useMemo(
    () => ({
      isPlaying,
      setIsPlaying,
      time,
      setTime
    }),
    [isPlaying, setIsPlaying, time, setTime]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMain must be used within a MainProvider');
  }
  return context;
};

export default MainProvider;
