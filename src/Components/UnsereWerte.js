import React from 'react';
import {useHistory} from 'react-router-dom';

let array = [
  {
    id: 1,
    text:
      'Gleichberechtigung (in Bildungschancen und Geschlechtergleichstellung)',
  },
  {id: 2, text: 'Diversität'},
  {id: 3, text: 'Solidarität'},
  {id: 4, text: 'Offenheit'},
  {id: 5, text: 'Nachhaltigkeit'},
];

export default class UnsereWerte extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='titulo texttituloteam texttitulouber'>
          <h1>UnsereWerte</h1>
        </div>
        <ul className='espacio-ul'>
          {array.map((item, index) => {
            return (
              <li className='text' key={item.id}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
