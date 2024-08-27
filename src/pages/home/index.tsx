import HomePage from '../../components/HomePage';
import MainProvider from '../../providers/MainProvider';

const Home = () => (
  <MainProvider>
    <HomePage />
  </MainProvider>
);

export default Home;
