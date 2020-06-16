import React from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Form = () => {
  return (
    <div className='forma-principal'>
      <form>
        <div className='nombre-forma'>
          <label>Name</label>
          <div className='input-forma'>
            <input type='text' name='Name' placeholder='Dein Name' required />
          </div>
        </div>
        <div className='email-forma'>
          <div className='correo'>
            <label>E-Mail-Adresse</label>
          </div>
          <div className='input-email'>
            <input
              type='email'
              name='email'
              placeholder='Deine E-Mail-Adresse'
              required
            />
          </div>
        </div>
        <div className='total-message'>
          <div className='message-forma'>
            <label className='carta' htmlFor='message'>
              Nachricht
            </label>
          </div>
          <div className='input-message'>
            <textarea
              cols='30'
              rows='10'
              placeholder='Deine Nachricht'
            ></textarea>
          </div>
        </div>
        <div className='button-forma'>
          <input type='Submit' value='Senden' />
        </div>
      </form>
    </div>
  );
};
