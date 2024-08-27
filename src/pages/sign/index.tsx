import SignPage from '../../components/SignPage';
import AuthProvider from '../../providers/AuthProvider';

const Sign = () => (
  <AuthProvider>
    <SignPage />
  </AuthProvider>
);

export default Sign;
