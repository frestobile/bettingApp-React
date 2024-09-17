import { useState } from 'react';
import Button from '../../shared/Button';
import Layout from '../Layout';
import UserStatsModal from './UserStatsModal';
import AccountModal from '../AccountModal';
import AffiliateModal from '../AffiliateModal';
import GameInfoModal from '../GameInfoModal';
import BetInfoModal from '../BetInfoModal';
import WalletModal from '../WalletModal';
import StakesModal from '../StakesModal';

const UserStatsPage = () => {
  const [isVisibleUserStats, setIsVisibleUserStats] = useState(false);
  const [isVisibleAccountModal, setIsVisibleAccountModal] = useState(false);
  const [isVisibleAffiliate, setIsVisibleAffiliate] = useState(false);
  const [isVisibleGameInfo, setIsVisibleGameInfo] = useState(false);
  const [isVisibleBetInfo, setIsVisibleBetInfo] = useState(false);
  const [isVisibleWalletModal, setIsVisibleWalletModal] = useState(false);
  const [isVisibleStakesModal, setIsVisibleStakesModal] = useState(false);

  return (
    <Layout type="base">
      <Button
        className="m-[10px] bg-white p-[10px]"
        onClick={() => {
          setIsVisibleUserStats(true);
        }}
      >
        UserStatsModal
      </Button>
      <Button
        className="m-[10px] bg-white p-[10px]"
        onClick={() => {
          setIsVisibleAccountModal(true);
        }}
      >
        Account Modal
      </Button>
      <Button
        className="m-[10px] bg-white p-[10px]"
        onClick={() => {
          setIsVisibleAffiliate(true);
        }}
      >
        Affiliate Modal
      </Button>
      <Button
        className="m-[10px] bg-white p-[10px]"
        onClick={() => {
          setIsVisibleGameInfo(true);
        }}
      >
        GAME INFORMATION
      </Button>
      <Button
        className="m-[10px] bg-white p-[10px]"
        onClick={() => {
          setIsVisibleBetInfo(true);
        }}
      >
        BET INFORMATION
      </Button>
      <Button
        className="m-[10px] bg-white p-[10px]"
        onClick={() => {
          setIsVisibleWalletModal(true);
        }}
      >
        Wallet
      </Button>
      <Button
        className="m-[10px] bg-white p-[10px]"
        onClick={() => {
          setIsVisibleStakesModal(true);
        }}
      >
        STAKES
      </Button>

      <UserStatsModal isVisible={isVisibleUserStats} setIsVisible={setIsVisibleUserStats} />
      <AccountModal isVisible={isVisibleAccountModal} setIsVisible={setIsVisibleAccountModal} />
      <AffiliateModal isVisible={isVisibleAffiliate} setIsVisible={setIsVisibleAffiliate} />
      <GameInfoModal isVisible={isVisibleGameInfo} setIsVisible={setIsVisibleGameInfo} />
      <BetInfoModal isVisible={isVisibleBetInfo} setIsVisible={setIsVisibleBetInfo} />
      <WalletModal isVisible={isVisibleWalletModal} setIsVisible={setIsVisibleWalletModal} />
      <StakesModal isVisible={isVisibleStakesModal} setIsVisible={setIsVisibleStakesModal} />
    </Layout>
  );
};

export default UserStatsPage;
