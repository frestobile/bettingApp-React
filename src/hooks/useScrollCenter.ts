import { useEffect } from 'react';

const useScrollCenter = (ref, changeMonth) => {
  useEffect(() => {
    const children = ref.current.getElementsByClassName('release-card');
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const getChildAtVerticalCenter = () => {
      const parentRect = ref.current.getBoundingClientRect();
      const parentCenterY = parentRect.top;

      let childAtCenter = null;
      let minDistance = Infinity;

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const childRect = child.getBoundingClientRect();
        const childCenterY = childRect.top + childRect.height / 2;

        const distance = Math.abs(childCenterY - parentCenterY);

        if (distance < minDistance) {
          minDistance = distance;
          childAtCenter = child;
        }
      }

      return childAtCenter;
    };
    const handleScroll = () => {
      const childAtCenter = getChildAtVerticalCenter();
      if (childAtCenter) {
        // Do something with the child element at the vertical center
        const date = childAtCenter
          .getElementsByClassName('release_date')[0]
          .innerText.trim()
          .split('/');
        // Create a new Date object with the converted date string
        // const date = new Date(`${year}-${month}-${day}`);
        changeMonth(months[Number(date[1]) - 1]);
      }
    };

    ref.current.addEventListener('scroll', handleScroll);
    // return () => {
    //     ref.current.removeEventListener("scroll", handleScroll);
    //   };
  }, []);
};

export default useScrollCenter;
