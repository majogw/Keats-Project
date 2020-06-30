import React from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nachricht, setNachricht] = useState('');
  function imprimirNombres() {
    console.log(name, email, nachricht);
  }
  return (
    <div className='forma-principal'>
      <div className='nombre-forma'>
        <label>Name</label>
        <div className='input-forma'>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className='input-compartida'
            type='text'
            name='Name'
            required
          />
          <span className='icon-input'>
            <FontAwesomeIcon icon={['far', 'user']} size='lg' />
          </span>
        </div>
      </div>
      <div className='email-forma'>
        <div className='correo'>
          <label>E-Mail-Adresse</label>
        </div>
        <div className='input-email'>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className='input-compartida'
            type='email'
            name='email'
            required
          />
          <span className='icon-input'>
            <FontAwesomeIcon icon={['far', 'envelope']} size='lg' />
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
