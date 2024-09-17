import Button from '../../../shared/Button';

const AddOrEditingButtons = ({ currentIndex, setCurrenIndex, addTitle }) => {
  return (
    <>
      {currentIndex.type === 'edit' ? (
        <div className="flex flex-row gap-x-[2px]">
          <Button
            className="bg-[#1c2127] flex-1
      rounded-[5px]
      xl:text-[14px] lg:text-[10.8px] md:text-[8.4px]
      h-[48px] "
            onClick={() => {
              setCurrenIndex({ type: null, id: null });
            }}
          >
            CANCEL
          </Button>
          <Button
            className="bg-[#f8bf60] text-black flex-1
      rounded-[5px]
      xl:text-[14px] lg:text-[10.8px] md:text-[8.4px]
      h-[48px] "
            onClick={() => {
              setCurrenIndex({ type: null, id: null });
            }}
          >
            COMFIRM EDIT
          </Button>
        </div>
      ) : (
        <Button
          className="bg-[#f8bf60] text-black
			rounded-[5px]
			xl:text-[14px] lg:text-[10.8px] md:text-[8.4px]
			h-[48px] "
        >
          {addTitle}
        </Button>
      )}
    </>
  );
};

export default AddOrEditingButtons;
