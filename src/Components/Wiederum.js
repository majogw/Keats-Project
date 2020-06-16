import React from 'react';
let array = [
  {
    id: 1,
    text: ' die soziale Integration ',
  },
  {id: 2, text: ' das Wohlbefinden'},
  {id: 3, text: ' die Beschleunigung des Spracherwerbs '},
  {id: 4, text: ' das Erlernen interkultureller Fähigkeiten in jungem Alter '},
  {id: 5, text: ' die Vernetzung der Eltern '},
  {id: 6, text: ' die Vernetzung des Quartiers'},
  {id: 7, text: ' eine inklusive, diverse und gleichberechtigte Gesellschaft'},
];

export default class Wiederum extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className='espacio-ul'>
        {array.map((item, index) => {
          return (
            <li className='text' key={item.id}>
              {item.text}
            </li>
          );
        })}
      </ul>
    );
  }
}
