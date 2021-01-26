import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {screenHeight} from 'Components/Variables';
import React from 'react';

export const BigComponent = ({color, arrow, activeCircle, children}) => {
  let colorCircle =
    activeCircle && activeCircle % 2 !== 0 ? '#4ac5ff' : 'white';

  const scrollToPosition = (position) => {
    // we have 4 cards
    console.log('scrolling to', screenHeight * position);
    window.scrollTo(0, screenHeight * position);
  };

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
      <div style={{flex: 1, width: '100%'}}>{children}</div>
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
