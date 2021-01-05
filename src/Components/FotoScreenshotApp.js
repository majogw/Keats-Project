import React from 'react';
import styled from 'styled-components';
import fotoScreenshot from './Images/ScreenshotApp.jpeg';

const GranScreenshot = styled.div`
  display: flex;
`;

const Screenshoti = styled.img`
  height: 42.37rem;
`;

export const FotoScreenshot = () => {
  return (
    <GranScreenshot>
      <Screenshoti alt='screenshotcel' src={fotoScreenshot} />
    </GranScreenshot>
  );
};
