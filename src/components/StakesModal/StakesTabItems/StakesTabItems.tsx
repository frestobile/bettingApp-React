import TabItemButton from '../../TabItemButton';

const StakesTabItems = ({ tab, setTab }) => {
  const tabs = ['ACTIVE STAKES', 'CUSTOM STAKES', 'PREVIOUS RESULTS'];
  return (
    <div
      className="flex flex-row gap-x-[2px]
    mx-[15px]
     h-[48px]"
    >
      {tabs.map((t, i) => (
        <TabItemButton
          key={i}
          isFirst={i === 0}
          isLast={i === tabs.length - 1}
          tab={tab}
          setTab={setTab}
          title={t}
          index={i}
        />
      ))}
    </div>
  );
};

export default StakesTabItems;
