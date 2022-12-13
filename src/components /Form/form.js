import React, { useRef, useState } from "react";
import { Container } from '@material-ui/core';
import emailjs from '@emailjs/browser';

import useStyles from './style.js';

const Form = () => {
    const classes = useStyles();
    const form = useRef();
    const [ result, showResult ] = useState(false);

    const Result = () => {
        return (
            <p className={classes.success}>Your message has beeen sent successfully!</p>
        )
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ecvky7j', 'template_cwi9z8i', form.current, '-I3mJJN-b4ZKB1AfZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

    return (
        <Container>
            <h1 className={classes.title}>Contact Form</h1>
            <div className={classes.group}>
                <div className={classes.form}>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className={classes.name}>
                            <label>Name</label>
                            <br />
                            <input className={classes.input} type="text" name="fullName" />
                        </div>
                        <br />
                        <div className={classes.email}>
                            <label>Email</label>
                            <br />
                            <input className={classes.input} type="email" name="email" />
                        </div>
                        <br />
                        <div className={classes.message}>
                            <label>Message</label>
                            <br />
                            <textarea className={classes.area} name="message" />
                            <br />
                            <input className={classes.button} type="submit" value="Send" />
                        </div>
                    </form>
                    <div>
                        {result ? <Result /> : null}
                    </div>
                </div>
            </div>
    </Container>
    )
}

export default Form;