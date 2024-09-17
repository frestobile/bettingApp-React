import { useState } from 'react';
import Button from '../../../shared/Button';
import TransactionTable from '../TransactionTable';

const TranscationTables = () => {
  const [tab, setTab] = useState<1 | 2>(1);
  const headers = ['Date', 'Game ID', 'Bet ID', 'Bet', 'x', 'Win'];

  const list = [
    [
      'Mon, 09 Nov 2020 23:40:04 GMT (2 mintues ago)',
      'GAME #10292357',
      'BET #10292357',
      1000,
      15,
      15000
    ],
    [
      'Mon, 09 Nov 2020 23:40:04 GMT (2 mintues ago)',
      'GAME #10292357',
      'BET #10292357',
      null,
      15,
      null
    ],
    [
      'Mon, 09 Nov 2020 23:40:04 GMT (2 mintues ago)',
      'GAME #10292357',
      'BET #10292357',
      null,
      15,
      null
    ],
    [
      'Mon, 09 Nov 2020 23:40:04 GMT (2 mintues ago)',
      'GAME #10292357',
      'BET #10292357',
      1000,
      15,
      15000
    ],
    [
      'Mon, 09 Nov 2020 23:40:04 GMT (2 mintues ago)',
      'GAME #10292357',
      'BET #10292357',
      1000,
      15,
      null
    ],
    [
      'Mon, 09 Nov 2020 23:40:04 GMT (2 mintues ago)',
      'GAME #10292357',
      'BET #10292357',
      null,
      15,
      null
    ]
  ];
  return (
    <>
      <div className="flex justify-center">
        <div
          className="flex flex-row justify-center fit-content
                items-center gap-[20px]"
        >
          <Button
            onClick={() => {
              setTab(1);
            }}
            className={
              tab === 1
                ? 'p-[5px] translate-y-[3px] !text-[#F8BF60] !border-b-[3px] !border-[#F8BF60]'
                : 'p-[5px] translate-y-[3px] !border-none'
            }
          >
            Bets
          </Button>
          <Button
            onClick={() => {
              setTab(2);
            }}
            className={
              tab === 2
                ? 'p-[5px] translate-y-[3px] !text-[#F8BF60] !border-b-[3px] !border-[#F8BF60]'
                : 'p-[5px] translate-y-[3px] !border-none'
            }
          >
            Transactions
          </Button>
        </div>
      </div>

      {tab === 1 ? <TransactionTable headers={headers} list={list} /> : ''}
      {tab === 2 ? <TransactionTable headers={headers} list={list} /> : ''}
    </>
  );
};

export default TranscationTables;
