import React from 'react'
import './Footer.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@material-ui/core'
import { useState } from 'react';


const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'flex',
      border: 0,
    }
  })


const useStylesBtn = makeStyles({
    btn: {
      backgroundColor: 'grey',
      fontSize: 24,
      color: '#f7d3ce',
      '&:hover' : {
          color: '#fc8474',
          backgroundColor: '#c1c1c1'
      }
    }
  })




function Footer() {

    const classes = useStyles()
    const btnClass = useStylesBtn()

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false)

    const [surname, setSurname] = useState('');
    const [surnameError, setSurnameError] = useState(false)

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setSurnameError(false)
        setEmailError(false)

        if(name === '') {
            setNameError(true)
        }
        if(surname === '') {
            setSurnameError(true)
        }
        if(email === '') {
            setEmailError(true)
        }

    }

    return (
        <div className='footer-content' >
            <div className="my-info">
                <p>Name</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Adress</p>
            </div>
            <div className="contact-form">
                <form className= 'form-fields' noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <TextField
                    onChange={(e) => setName(e.target.value)}
                    className={classes.field}
                    // color=''
                    label='Name' 
                    variant='outlined'
                    required
                    error={nameError}
                    />
                    <TextField
                    onChange={(e) => setSurname(e.target.value)}
                    className={classes.field}
                    label='Surname' 
                    variant='outlined'
                    required
                    error={surnameError}
                    />
                    <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.field}
                    // color=''
                    label='E-mail'
                    variant='outlined'
                    required
                    error={emailError}
                    />
                    <TextField
                    className={classes.field}
                    // color='red'
                    label='Send me a message...'
                    multiline
                    rows={6} 
                    fullWidth
                    variant='outlined'
                    />
                    
                    <Button
                    className={btnClass.btn}
                    type="submit" 
                    color="primary" 
                    variant="contained"
                    endIcon={<SendIcon />}>
                    Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Footer