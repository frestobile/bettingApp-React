import { useEffect } from 'react';

const useOnHover = (ref, changeText) => {
  useEffect(() => {
    const handleMouseOver = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        changeText(true);
      } else {
        changeText(false);
      }
    };
    document.addEventListener('mouseover', handleMouseOver);
    // return () => {
    //     document.removeEventListener("mouseover", handleMouseOver);
    // };
  }, []);
};

export default useOnHover;
