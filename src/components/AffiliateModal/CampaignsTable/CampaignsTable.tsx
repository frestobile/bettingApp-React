import ScrollableComponent from '../../../shared/ScrollbarComponent';
import CampaignsTableRow from './CampaignsTableRow';

const CampaignsTable = ({ headers, list }) => {
  return (
    <div className="xl:text-[10px] lg:text-[8px] text-[6px] break-all text-center">
      <div className={`w-full grid grid-cols-8 py-[5px]`}>
        {headers.map((h, i) => (
          <div
            key={i}
            className={`flex flex-wrap items-center justify-center
                        bg-[#f8bf60] py-[5px]
                        border-[#1c2127]
                        text-black
                        ${i === 0 ? 'rounded-tl-[4px]' : ''}
                        ${i === headers.length - 1 ? 'rounded-tr-[4px]' : 'border-r-[1px]'}`}
          >
            {h}
          </div>
        ))}
      </div>
      <ScrollableComponent className="w-full max-h-[calc(100vh-595px)]">
        <div className={`gap-y-[4px]  w-full grid grid-cols-8`}>
          {list.map((h, i) => (
            <CampaignsTableRow key={i} tRow={h} />
          ))}
        </div>
      </ScrollableComponent>
    </div>
  );
};

export default CampaignsTable;
