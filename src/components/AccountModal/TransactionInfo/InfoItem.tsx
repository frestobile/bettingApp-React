const TransactionInfoItem = ({ text, children }) => {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      {text} {children}
    </div>
  );
};

export default TransactionInfoItem;
