import { createContext, useContext, useState, useMemo, useEffect } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordV, setUserPasswordV] = useState('');
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');

  useEffect(() => {
    setUserName('');
    setUserEmail('');
    setUserPassword('');
    setUserPasswordV('');
  }, [tab]);

  const value = useMemo(
    () => ({
      userEmail,
      setUserEmail,
      userPassword,
      setUserPassword,
      userPasswordV,
      setUserPasswordV,
      userName,
      setUserName,
      tab,
      setTab
    }),
    [
      userEmail,
      setUserEmail,
      userPassword,
      setUserPassword,
      userPasswordV,
      setUserPasswordV,
      userName,
      setUserName,
      tab,
      setTab
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export default AuthProvider;
