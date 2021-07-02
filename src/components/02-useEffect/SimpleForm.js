import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });

  const { name, email } = formState;

  useEffect(() => {
    /*    console.log('Hey!!'); */
  }, []);

  useEffect(() => {
    /*    console.log('formState cambio'); */
  }, [formState]);

  useEffect(() => {
    /*  console.log('email cambio'); */
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr></hr>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu correo"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {name === '123' && <Message></Message>}
    </>
  );
};
