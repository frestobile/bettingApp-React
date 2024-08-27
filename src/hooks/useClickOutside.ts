import { useEffect } from 'react';

const useClickOutside = (ref, elementRef, toggleVisiblePopover) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        elementRef.current &&
        !elementRef.current.contains(e.target)
      ) {
        toggleVisiblePopover();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
};
export default useClickOutside;
