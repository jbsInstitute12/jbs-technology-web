import React, { useEffect, useState } from 'react';
import $ from 'jquery';

 const Counter = ({ targetValue }) => {
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const counter = document.querySelector('.counter');
      const isVisible = counter.getBoundingClientRect().top <= window.innerHeight;

      if (isVisible && counterValue < targetValue) {
        $(counter).prop('Counter', counterValue).animate(
          {
            Counter: targetValue,
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              setCounterValue(Math.ceil(now));
            },
          }
        );
        // Remove the event listener once the counter reaches the target value
        if (counterValue >= targetValue) {
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Optionally, add a cleanup function to remove the event listener when the component unmounts
    return () => {
      // window.removeEventListener('scroll', handleScroll);
    };
  }, [counterValue, targetValue]);

  return <div className="counter">{counterValue > 0 && counterValue}+100</div>;

};

export default Counter;
