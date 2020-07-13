import React from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {icon} from '@fortawesome/fontawesome-svg-core';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nachricht, setNachricht] = useState('');
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);

  function imprimirNombres() {
    console.log(name, email, nachricht);
  }
  function CambioColor() {
    if (name === '' && focusName === false) {
      return 'grey';
    } else {
      return '#4ac5ff';
    }
  }
  function ColorEmail() {
    if (email === '' && focusEmail === false) {
      return 'grey';
    } else {
      return '#4ac5ff';
    }
  }

  return (
    <div className='forma-principal'>
      <div className='nombre-forma'>
        <label>Name</label>
        <div className='input-forma'>
          <input
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            onFocus={(event) => setFocusName(true)}
            onBlur={(event) => setFocusName(false)}
            className='input-compartida'
            type='text'
            name='Name'
            required
          />
          <span id='icon-name' className='icon-input'>
            <FontAwesomeIcon
              icon={['far', 'user']}
              size='lg'
              color={CambioColor()}
            />
          </span>
        </div>
      </div>
      <div className='email-forma'>
        <div className='correo'>
          <label>E-Mail-Adresse</label>
        </div>
        <div className='input-email'>
          <input
            id='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={(event) => setFocusEmail(true)}
            onBlur={(event) => setFocusEmail(false)}
            className='input-compartida'
            type='email'
            name='email'
            required
          />
          <span id='icon-email' className='icon-input'>
            <FontAwesomeIcon
              icon={['far', 'envelope']}
              size='lg'
              color={ColorEmail()}
            />
          </span>
        </div>
      </div>
      <div className='total-message'>
        <div className='message-forma'>
          <label className='carta' htmlFor='message'>
            Nachricht
          </label>
        </div>
        <div className='input-mes'>
          <textarea
            value={nachricht}
            onChange={(event) => setNachricht(event.target.value)}
            className='input-message'
            cols='30'
            rows='10'
          ></textarea>
        </div>
      </div>
      <div className='button-forma'>
        <button onClick={imprimirNombres} className='button'>
          <span>Senden </span>
        </button>
      </div>
    </div>
  );
};
