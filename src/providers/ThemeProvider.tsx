import { useContext, FC, useEffect, createContext, ReactNode, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface themeProps {
  themeMode: string;
  onChangeThemeConfig: (mode?: string) => void;
}

interface Props {
  children: ReactNode;
}

const ThemeContext = createContext<Partial<themeProps> | null>(null);

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [themeMode, setThemeMode] = useLocalStorage<string>('theme', 'light');

  const toggleMode = () => {
    const html = document.querySelector<HTMLHtmlElement>('html')!;
    if (themeMode === 'light') {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  };

  const onChangeThemeConfig = (mode?: string) => {
    if (mode === undefined) {
      setThemeMode(themeMode === 'light' ? 'dark' : 'light');
      return;
    }
    setThemeMode(mode);
  };

  const provider = useMemo(
    () => ({
      themeMode,
      onChangeThemeConfig
    }),
    [themeMode, onChangeThemeConfig]
  );

  useEffect(() => {
    toggleMode();
  }, [themeMode]);

  return <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
