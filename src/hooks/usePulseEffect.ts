import React, { useEffect } from 'react';

interface Props {
  ref?: React.RefObject<HTMLButtonElement>;
  pulseRef?: React.RefObject<HTMLDivElement>;
  animationColor?: string;
}

const usePulseEffect = ({ ref, pulseRef, animationColor }: Props) => {
  useEffect(() => {
    if (ref?.current && pulseRef?.current && animationColor) {
      ref.current.addEventListener('click', (event) => {
        pulseRef.current.classList.remove('pulse__effect');
        const posX = event?.clientX;
        const posY = event?.clientY;

        const topY = ref.current.getBoundingClientRect().top;
        const leftX = ref.current.getBoundingClientRect().left;

        const offsetX = posX - leftX;
        const offsetY = posY - topY;

        // eslint-disable-next-line no-param-reassign
        pulseRef.current.style.left = `${offsetX}px`;
        // eslint-disable-next-line no-param-reassign
        pulseRef.current.style.top = `${offsetY}px`;

        // Find the keyframes rule you want to modify
        const styleSheet = document.styleSheets[0]; // Assuming it's the first style sheet
        // Filter the rules to select only CSSKeyframesRule objects
        const keyframesRules = Array.from(styleSheet.cssRules).filter(
          (rule) => rule.type === CSSRule.KEYFRAMES_RULE
        );

        let keyframesRule;
        for (let i = 0; i < keyframesRules.length; i++) {
          const ruleItem = keyframesRules[i] as CSSKeyframesRule;
          if (ruleItem.name === 'pulse-effect') {
            keyframesRule = keyframesRules[i];
            break;
          }
        }
        // Modify the background value of the keyframes rule
        keyframesRule[0].style.background = animationColor; // Set the desired background value
        keyframesRule[1].style.background = animationColor; // Set the desired background value

        pulseRef.current.classList.add('pulse__effect');
      });
    }
  }, [ref, pulseRef]);
};

export default usePulseEffect;
