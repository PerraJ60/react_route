import React, { useState } from 'react';
import Input from './Input.js';

function Login() {
    const [form, setValues] = useState({
      username: '',
      password: ''
    });
  
    const submitForm = (e) => {
     alert ('Login not yet implemented, sorry!!');
    };
  
    const updateField = (e) => {
      alert('cool');
      setValues({
        ...form,
        [e.target.name]: e.target.value
      });
    };
    return (
        <div style={{marginLeft: '50px'}}>
            <h2>Login</h2>
            <br/>
            <form onSubmit={submitForm}>
                <Input
                    id='username'
                    value={form.username}
                    name='username'
                    placeholder='Enter your username'
                    onChange={updateField}
                />
                <br/>
                <Input
                    id='password'
                    value={form.password}
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    onChange={updateField}
                />
                <br/>
                <button 
                    type='submit'
                    style={{marginTop: '6px'}}
                    >
                    Submit
                </button>
            </form>
        </div>
    );
  }
  export default Login;