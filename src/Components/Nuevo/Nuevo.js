import {PrimerComponente} from 'Components/PrimerComponente';
import {SegundoComponente} from 'Components/SegundoComponente';
import {TercerComponente} from 'Components/TercerComponente';
import React from 'react';
import {BigComponent} from './BigComponent';

export const Nuevo = () => {
  /*const [adicion, setAdicion] = useState(0);*/

  /* const subir = (num) => {
    setAdicion(adicion + num);
  };*/

  return (
    <div>
      <BigComponent
        color={'#4ac5ff'}
        arrow={undefined}
        activeCircle={undefined}
      >
        <PrimerComponente></PrimerComponente>
      </BigComponent>
      <BigComponent color={'white'} activeCircle={1} arrow={undefined}>
        <SegundoComponente></SegundoComponente>
      </BigComponent>
      <BigComponent color={'#4ac5ff'} activeCircle={2} arrow={undefined}>
        <TercerComponente></TercerComponente>
      </BigComponent>
      <BigComponent color={'white'} activeCircle={3} arrow={undefined} />
    </div>
  );
};
