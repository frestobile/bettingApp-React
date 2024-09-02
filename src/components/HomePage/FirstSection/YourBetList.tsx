import DiamondComponent from '../../../shared/Diamond';

const YourBetList = () => {
  return (
    <div className="bg-[#2c3137] grid grid-cols-12  gap-[3px] p-[3px]">
      <DiamondComponent
        postion="center"
        containerClassName="col-span-4"
        xValue={10}
        dValue={10000}
      />
      <DiamondComponent
        postion="center"
        containerClassName="col-span-4"
        xValue={1000}
        dValue={9000}
      />
      <DiamondComponent
        postion="center"
        containerClassName="col-span-4"
        xValue={100}
        dValue={500}
      />
      <DiamondComponent postion="center" containerClassName="col-span-6" xValue={6} dValue={100} />
      <DiamondComponent postion="center" containerClassName="col-span-6" xValue={5} dValue={10} />
      <DiamondComponent postion="center" containerClassName="col-span-12" xValue={2} dValue={10} />
    </div>
  );
};

export default YourBetList;
