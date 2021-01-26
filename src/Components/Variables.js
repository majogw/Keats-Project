import styled from 'styled-components';

export const Colores = {
  celesteObscuro: '#4ac5ff',
  celesteClaro: '#ccefff',
};

// screen height is always window.innerHeight
export const screenHeight = window.innerHeight;

export const SPACING = 8;

export const MakeSpacing = styled.div`
  height: ${(props) =>
    props.yMultiply ? SPACING * props.yMultiply : SPACING}px;
  width: ${(props) =>
    props.xMultiply ? SPACING * props.xMultiply : SPACING}px;
}`;

export const Fonts = {
  robotoMedium: 'Roboto-Medium',
};
