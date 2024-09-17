import { createContext, useContext, useState, useMemo } from 'react';

const UserStatsContext = createContext(null);

const UserStatsProvider = ({ children }) => {
  const [chartData, setChartData] = useState([
    { x: 100, y: 225 },
    { x: 327, y: 250 },
    { x: 437, y: 267 },
    { x: 511, y: 256 },
    { x: 601, y: 258 },
    { x: 578, y: 247 },
    { x: 592, y: 239 },
    { x: 749, y: 253 },
    { x: 894, y: 229 },
    { x: 1189, y: 257 },
    { x: 1211, y: 253 },
    { x: 1521, y: 281 },
    { x: 1700, y: 248 }
  ]);

  const value = useMemo(
    () => ({
      chartData,
      setChartData
    }),
    [chartData, setChartData]
  );

  return <UserStatsContext.Provider value={value}>{children}</UserStatsContext.Provider>;
};

export const useUserStats = () => {
  const context = useContext(UserStatsContext);
  if (!context) {
    throw new Error('useUserStats must be used within a UserStatsProvider');
  }
  return context;
};

export default UserStatsProvider;
