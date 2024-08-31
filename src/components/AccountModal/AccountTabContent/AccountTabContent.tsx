import SecurityTab from '../SecurityTab';
import TransactionsTab from '../TransactionsTab';
import TwoFATab from '../TwoFATab';

const AccountTabContent = ({ currentTab }) => {
  return (
    <>
      {currentTab === 1 ? <SecurityTab /> : ''}
      {currentTab === 2 ? <TransactionsTab /> : ''}
      {currentTab === 3 ? <TwoFATab /> : ''}
    </>
  );
};

export default AccountTabContent;
