import React from 'react'
import './Footer.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import SendIcon from '@mui/icons-material/Send';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@mui/material/colors'
import { useState } from 'react';


const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: 24,
      display: 'flex',
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

  const theme = createMuiTheme({
    palette : {
        primary: {
            main: pink[100]
        },
        text: {
            secondary: pink[100]
        }
    },
    overrides: {
        MuiInputBase: {
            root : {
                    fontSize: 24
            }
        },
        MuiOutlinedInput : {
            root: {
                '& $notchedOutline': {
                    borderColor: "white"
                  },
                  "&:hover $notchedOutline": {
                    borderColor: "none"
                  },
            }
        },

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
    <ThemeProvider theme={theme}>
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
                        label='E-mail'
                        variant='outlined'
                        required
                        error={emailError}
                        />
                        <TextField
                        className={classes.field}
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
       </ThemeProvider>
    )
}

export default Footer