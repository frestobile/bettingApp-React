import DiamondComponent from '../../../shared/Diamond';

const YourBets = () => {
  return (
    <div className="bg-[#2c3137] grid grid-cols-12 gap-[3px] px-[3px]">
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
      <DiamondComponent postion="center" containerClassName="col-span-4" xValue={4} dValue={100} />
      <DiamondComponent postion="center" containerClassName="col-span-4" xValue={3} dValue={100} />
      <DiamondComponent postion="center" containerClassName="col-span-4" xValue={2} dValue={100} />

      <DiamondComponent postion="center" containerClassName="col-span-4" xValue={6} dValue={500} />
      <DiamondComponent postion="center" containerClassName="col-span-4" xValue={20} dValue={100} />
      <DiamondComponent postion="center" containerClassName="col-span-4" xValue={12} dValue={100} />

      <DiamondComponent postion="center" containerClassName="col-span-6" xValue={6} dValue={100} />
      <DiamondComponent postion="center" containerClassName="col-span-6" xValue={5} dValue={10} />

      <DiamondComponent postion="center" containerClassName="col-span-12" xValue={2} dValue={10} />
    </div>
  );
};

export default YourBets;
