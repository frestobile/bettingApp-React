import UserStatsPage from '../../components/UserStatsPage';
import UserStatsProbider from '../../providers/UserStatsProvider';

const UserStats = () => {
  return (
    <UserStatsProbider>
      <UserStatsPage />
    </UserStatsProbider>
  );
};

export default UserStats;
