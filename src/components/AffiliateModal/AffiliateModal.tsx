import { useState } from 'react';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import CampaignsTab from './CampaignsTab';
import ReferralsTab from './ReferralsTab';

const AffiliateModal = ({ isVisible, setIsVisible }) => {
  const [tab, setTab] = useState<1 | 2>(1);
  return (
    <Modal
      classNames="md:w-[700px]
      w-[95%]
      !gap-0 text-white
            !absolute
            !top-[15px]"
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="AFFILIATE"
      isVisible={isVisible}
    >
      <div
        className="flex flex-col
          gap-[10px] mx-[0] pb-[15px] text-[8px]
          xl:mx-[15px] lg:mx-[12px] md:mx-[9px]
          md:text-[12px]"
      >
        <div className=" m-[20px] flex flex-col md:gap-[10px] gap-[5px]">
          <div
            className="flex flex-row gap-0
              border-b-[1px] border-[#1c2127] pb-[15px]"
          >
            <Button
              onClick={() => {
                setTab(1);
              }}
              className={`${
                tab === 1
                  ? 'hover:mix-blend-difference !bg-[#f8bf60] text-black'
                  : 'hover:bg-[#21262c] bg-[#1c2127] text-white'
              }
            !rounded-l-[5px] !flex-1 !h-[40px]`}
            >
              CAMPAIGNS
            </Button>
            <Button
              onClick={() => {
                setTab(2);
              }}
              className={`${
                tab === 2
                  ? 'hover:mix-blend-difference !bg-[#f8bf60] text-black'
                  : 'hover:bg-[#21262c] bg-[#1c2127] text-white'
              }
            !rounded-r-[5px] !flex-1 !h-[40px]`}
            >
              REFERRALS
            </Button>
          </div>
          {tab === 1 ? <CampaignsTab /> : <ReferralsTab />}
        </div>
      </div>
    </Modal>
  );
};

export default AffiliateModal;
