import { useEffect, useState } from 'react';
import Button from '../../../shared/Button';

const CreateCampaignForm = () => {
  const [campaignName, setCampaignName] = useState('');
  const [code, setCode] = useState('');
  const [valid, setValid] = useState(true);
  const [touchedCode, setTouchedCode] = useState(false);
  const [touchedName, setTouchedName] = useState(false);

  const CreateCampaign = () => {
    if (code && campaignName) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  useEffect(() => {
    if (code && campaignName) {
      setValid(true);
    }
  }, [code, campaignName]);
  return (
    <div
      className="grid grid-cols-3 w-full h-[40px] bg-[#1c2127]
        border-none rounded-[4px]"
    >
      <div
        className="relative col-span-2 flex flex-row
            h-full"
      >
        <div
          className="flex flex-col w-[50%]
                relative
                justify-center"
        >
          <input
            type="text"
            id="campaignName"
            onFocus={() => {
              if (!touchedName) {
                setTouchedName(true);
              }
            }}
            className="h-full bg-[#1c2127]
                        px-[10px]
                        outline-none rounded-l-[4px]"
            value={campaignName}
            onChange={(e) => {
              setCampaignName(e.target.value);
            }}
          />
          <label
            htmlFor="campaignName"
            className={`absolute md:px-[15px] pl-[15px] ${
              touchedName ? 'md:top-[-6px] top-[-4px] md:text-[10px] text-[6px]' : ''
            }`}
          >
            CAMPAIGN NAME
          </label>
          <div
            className={`absolute h-0 w-full top-0 bg-transparent
                    !border-b-[1px] ${
                      touchedName
                        ? valid
                          ? 'border-[#f8bf60] md:left-[113px] left-[75px]'
                          : 'border-[#ed2a1d] md:left-[113px] left-[75px]'
                        : valid
                          ? 'border-[#f8bf60]'
                          : ''
                    }`}
          />
        </div>
        <div className="w-[1px] h-full bg-[#2c3137]" />
        <div className="flex flex-col justify-center w-[50%] relative">
          <label
            htmlFor="code"
            className={`absolute px-[10px] ${
              touchedCode ? 'md:top-[-6px] top-[-4px] md:text-[10px] text-[6px]' : ''
            }`}
          >
            Code
          </label>
          <input
            type="text"
            id="code"
            className="h-full bg-[#1c2127] outline-none
                    px-[10px]"
            onFocus={() => {
              if (!touchedCode) {
                setTouchedCode(true);
              }
            }}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <div
            className={`absolute h-0 w-full top-0 bg-transparent
                    !border-b-[1px] ${
                      touchedCode
                        ? valid
                          ? 'border-[#f8bf60] md:left-[43px] left-[35px] md:!w-[calc(100%-43px)] !w-[calc(100%-35px)]'
                          : 'border-[#ed2a1d] md:left-[43px] left-[35px] md:!w-[calc(100%-43px)] !w-[calc(100%-35px)]'
                        : valid
                          ? 'border-[#f8bf60]'
                          : ''
                    }`}
          />
        </div>
        <div
          className={`absolute h-full w-[10px]
                border-[1px] !border-r-[0px] rounded-l-[4px] ${
                  touchedName
                    ? valid
                      ? 'border-[#f8bf60]'
                      : 'border-[#ed2a1d]'
                    : valid
                      ? 'border-[#f8bf60]'
                      : ''
                }`}
        />
        <div
          className={`absolute h-0 w-[calc(100%-8px)] bottom-0 bg-transparent left-[8px]
                !border-b-[1px] rounded-l-[4px] ${
                  touchedName
                    ? valid
                      ? 'border-[#f8bf60]'
                      : 'border-[#ed2a1d]'
                    : valid
                      ? 'border-[#f8bf60]'
                      : ''
                }`}
        />
      </div>
      <Button
        onClick={() => {
          CreateCampaign();
        }}
        className={`bg-[#f8bf60] col-span-1
            text-black px-[20px] z-[1] rounded-r-[4px] h-full border-[1px] !border-l-[0px] active:!border-[#f8bf60]
            ${
              touchedName
                ? valid
                  ? 'border-[#f8bf60]'
                  : 'border-[#ed2a1d]'
                : valid
                  ? 'border-[#f8bf60]'
                  : ''
            }`}
      >
        CREATE CAMPAIGN
      </Button>
    </div>
  );
};

export default CreateCampaignForm;
