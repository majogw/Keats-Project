import React, {useCallback, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as _ from 'lodash';

export const BigComponent = ({color, arrow, activeCircle}) => {
  let colorCircle =
    activeCircle && activeCircle % 2 !== 0 ? '#4ac5ff' : 'white';

  // screen height is always window.innerHeight
  const screenHeight = window.innerHeight;

  const scrollToPosition = (position) => {
    // we have 4 cards
    console.log('scrolling to', screenHeight * position);
    window.scrollTo(0, screenHeight * position);
  };

  const handleManualScroll = useCallback(
    (event) => {
      const yValue = window.scrollY;

      if (yValue > 0 && yValue <= screenHeight) {
        window.scrollTo(0, screenHeight);
      } else if (yValue > screenHeight && yValue <= screenHeight * 2) {
        window.scrollTo(0, screenHeight * 2);
      } else if (yValue > screenHeight && yValue <= screenHeight * 3) {
        window.scrollTo(0, screenHeight * 3);
      } else if (yValue > screenHeight && yValue <= screenHeight * 4) {
        window.scrollTo(0, screenHeight * 4);
      }
    },
    [screenHeight],
  );

  useEffect(() => {
    window.addEventListener(
      'scroll',
      _.debounce((e) => {
        handleManualScroll(e);
      }, 300),
    );

    return () => {
      window.removeEventListener('scroll', (e) => handleManualScroll(e));
    };
  });

  return (
    <div
      style={{
        backgroundColor: color,
        flex: 1,
        height: screenHeight,
        width: '100%',
        display: 'flex',
      }}
    >
      <div style={{flex: 1}}>Main Content</div>
      {activeCircle && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 20,
          }}
        >
          <FontAwesomeIcon
            icon={['fas', 'circle']}
            size={'2x'}
            color={activeCircle === 1 ? colorCircle : 'transparent'}
            stroke={colorCircle}
            strokeWidth={10}
            style={{margin: '10px'}}
            onClick={() => scrollToPosition(1)}
          />
          <FontAwesomeIcon
            icon={['fas', 'circle']}
            size={'2x'}
            color={activeCircle === 2 ? colorCircle : 'transparent'}
            stroke={colorCircle}
            strokeWidth={10}
            style={{margin: '10px'}}
            onClick={() => scrollToPosition(2)}
          />
          <FontAwesomeIcon
            icon={['fas', 'circle']}
            size={'2x'}
            color={activeCircle === 3 ? colorCircle : 'transparent'}
            stroke={colorCircle}
            strokeWidth={10}
            style={{margin: '10px'}}
            onClick={() => scrollToPosition(3)}
          />
        </div>
      )}
      {arrow && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '100%',
          }}
          onClick={() => scrollToPosition(1)}
        >
          <FontAwesomeIcon
            icon={['fas', 'chevron-down']}
            size='5x'
            color={'white'}
          />
        </div>
      )}
    </div>
  );
};
