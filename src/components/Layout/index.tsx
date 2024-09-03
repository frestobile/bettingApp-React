import { useEffect } from 'react';
import BaseLayout from './BaseLayout';
import MainLayout from './MainLayout';
import { ILayout } from './types';
import { useTheme } from '../../providers/ThemeProvider';

const layoutContainers = {
  base: BaseLayout,
  main: MainLayout
};

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers;
}

function Layout({ children, type }: ILayoutFactory) {
  const { onChangeThemeConfig } = useTheme();

  useEffect(() => {
    onChangeThemeConfig('light');
  }, []);

  const Container = layoutContainers[type];

  return <Container>{children}</Container>;
}

export default Layout;
