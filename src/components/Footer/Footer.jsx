import React from 'react'
import './Footer.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import SendIcon from '@mui/icons-material/Send';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faUser, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@mui/material/colors'
import { useState } from 'react';
import { borderColor } from '@mui/system';


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
      backgroundColor: 'transparent',
      fontSize: 24,
      color: '#f7d3ce',
      border: 2,
      borderBlockColor: 'white',
      '&:hover' : {
          color: '#fc8474',
          backgroundColor: '#c1c1c1'
      }
    },
    overrides: {
        MuiButton : {
            root : {
                border: '4px solid black',
            }
        }
    }
  })

  const theme = createMuiTheme({
    palette : {
        primary: {
            main: '#f7d3ce'
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
                    <div className="info-container">
                        <div className="name-container">
                            <div className="name-logo">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="name-text">
                                <p>Name</p>
                                <p className='bold-name'>Alex Rus</p>
                            </div>
                        </div>
                        <div className="adress-container">
                            <div className="adress-logo">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="adress-text">
                                <p>Adress</p>
                                <p className='bold-adress'>Romania, Cluj-Napoca</p>
                            </div>
                        </div>
                        <div className="email-container">
                            <div className="email-logo">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                            <div className="email-text">
                                <p>Email</p>
                                <p className='bold-email'>alexrus2503@gmail.com</p>
                            </div>
                        </div>
                    </div>
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
                        sx={{borderColor: 'white'}}
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