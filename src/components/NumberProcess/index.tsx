const NumberProcess = ({ number, shouldRemoveFloat = true }) => {
  let formattedNumber;

  if (shouldRemoveFloat) {
    formattedNumber = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      .format(number)
      .replace('$', '')
      .replace(/\..*/g, '');
  } else {
    formattedNumber = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      .format(number)
      .replace('$', '');
  }

  return <span>{formattedNumber}</span>; // Return a JSX element
};

export default NumberProcess;
