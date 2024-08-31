import CampaignInfoBox from './CampaignInfoBox';

const CampaignInfo = () => {
  const campaigns = [
    { title: 'CAMPAIGN HITS', value: 1059530.08 },
    { title: 'REFERRALS', value: 1059530.08 },
    { title: 'DEPOSITORS', value: 1059530.08 },
    { title: 'DEPOSITS', value: 1059530.08 },
    { title: 'TOTAL', value: 1059530.08 },
    { title: 'AVAILABLE', value: 1059530.08 }
  ];
  return (
    <div className="flex flex-wrap gap-[3px] w-full">
      {campaigns.map((c, i) => (
        <CampaignInfoBox key={i} {...c} />
      ))}
    </div>
  );
};

export default CampaignInfo;
