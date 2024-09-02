import UserAndMark from './UserAndMark';

const AllBets = () => {
  const bets = [
    { mark: 758, type: 'yellow', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    {
      mark: 63,
      type: 'blue',
      name: 'ExtremelyLongUsername1234567',
      dValue: 777777.77,
      xValue: 777777.77
    },
    { mark: 68, type: 'blue', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { mark: 22, type: 'green', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { mark: 97, type: 'purple', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    {
      mark: 63,
      type: 'blue',
      name: 'ExtremelyLongUsername1234567',
      dValue: 777777.77,
      xValue: 777777.77
    },
    { mark: 758, type: 'yellow', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { mark: 97, type: 'purple', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { mark: 758, type: 'yellow', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    {
      mark: 758,
      type: 'blue',
      name: 'ExtremelyLongUsername1234567',
      dValue: 777777.77,
      xValue: 777777.77
    },
    { mark: 758, type: 'blue', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { mark: 758, type: 'green', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { mark: 758, type: 'purple', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    {
      mark: 758,
      type: 'blue',
      name: 'ExtremelyLongUsername1234567',
      dValue: 777777.77,
      xValue: 777777.77
    },
    { mark: 758, type: 'yellow', name: 'Username', dValue: 777777.77, xValue: 777777.77 },
    { mark: 758, type: 'purple', name: 'Username', dValue: 777777.77, xValue: 777777.77 }
  ];
  return (
    <div className="bg-[#2c3137] flex flex-col w-full gap-y-[3px] px-[3px] pb-[3px]">
      {bets.map((bet, i) => (
        <UserAndMark {...bet} key={i} />
      ))}
    </div>
  );
};

export default AllBets;
