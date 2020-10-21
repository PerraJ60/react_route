import React, { useEffect, useRef } from 'react';
import Input from './Input.js';

function Contact () {
    /*
     This contact form needs no mouse, just the Enter key.
    */

    const nameRef       = useRef(null);
    const emailRef      = useRef(null);
    const messageRef    = useRef(null);
    const submitRef     = useRef(null);

    useEffect( ()=> {
        nameRef.current.focus();
    }, []);

    function namekeyDown(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            emailRef.current.focus();
        }
    }
    function emailkeyDown(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            messageRef.current.focus();
        }
    }
    function messagekeyDown(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            submitRef.current.focus();
        }
    }
    function isValidEmailAddress(address)
    {
        return address.match(/.+@.+/) ? true:false;
    }
    function submitMessage(e) {
        if(isValidEmailAddress (emailRef.current.value) &&
                            nameRef.current.value !== '' &&
                            messageRef.current.value !== '') 
        {
            alert('Your message has been sent successfully!\nWe will respond as soon as possible!');
        }
        else{
            e.preventDefault();
            alert('Some field(s) are not correct! Please retry!');
        }
    }
    return (
    <div style={{marginLeft: '50px'}}>
      <h2>Contact us!</h2>
      <br/>
      <form onSubmit={submitMessage} >
        <Input 
            type='text' 
            id='name' 
            ref={nameRef} 
            onKeyDown={namekeyDown} 
            placeholder='Enter your name'
            />
            <br/>
        <Input 
            type='text' 
            id='email' 
            ref={emailRef} 
            onKeyDown={emailkeyDown} 
            placeholder='Enter your e-mail'
            />
            <br/>
        <textarea 
            type='text' 
            id='message' 
            ref={messageRef} 
            onKeyDown={messagekeyDown} 
            placeholder='Enter your message'>
        </textarea>
            <br/>
        <button 
            type='submit' 
            ref={submitRef} 
            style={{marginTop: '6px'}}>Send Message
        </button>
      </form>
    </div>
  )
}
export default Contact;